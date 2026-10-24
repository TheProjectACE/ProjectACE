"use client";

import { useMemo, useState } from "react";
import type { ChangeEvent } from "react";
import {
  CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from "recharts";
import { parseCsv, numericValues, summarizeNumbers, type CsvDocument } from "@/lib/csv";

const MAX_FILE_BYTES = 5 * 1024 * 1024;
const numberFormat = new Intl.NumberFormat(undefined, { maximumFractionDigits: 4 });

export function CsvExplorer() {
  const [dataset, setDataset] = useState<CsvDocument | null>(null);
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");
  const [xColumn, setXColumn] = useState("");
  const [yColumn, setYColumn] = useState("");
  const [filter, setFilter] = useState("");

  const numericColumns = useMemo(() => {
    if (!dataset) return [];
    return dataset.headers.filter((header) =>
      dataset.rows.some((row) => {
        const value = row[header]?.trim() ?? "";
        return value !== "" && Number.isFinite(Number(value));
      })
    );
  }, [dataset]);

  const visibleRows = useMemo(() => {
    if (!dataset) return [];
    const needle = filter.trim().toLowerCase();
    return dataset.rows.filter((row) => !needle || Object.values(row).some((value) => value.toLowerCase().includes(needle)));
  }, [dataset, filter]);

  const chartData = useMemo(() => {
    if (!dataset || !xColumn || !yColumn) return [];
    return visibleRows.flatMap((row, index) => {
      const raw = row[yColumn]?.trim() ?? "";
      const y = Number(raw);
      const x = row[xColumn]?.trim() ?? "";
      if (!raw || !Number.isFinite(y) || !x) return [];
      return [{ x, y, row: index + 1 }];
    }).slice(0, 2500);
  }, [dataset, xColumn, yColumn, visibleRows]);

  const summary = useMemo(() => summarizeNumbers(numericValues(visibleRows, yColumn)), [visibleRows, yColumn]);

  async function onFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    setError("");
    setDataset(null);
    setFileName("");
    if (!file.name.toLowerCase().endsWith(".csv") && file.type !== "text/csv") {
      setError("Choose a .csv file. Other file types are not accepted.");
      event.target.value = "";
      return;
    }
    if (file.size > MAX_FILE_BYTES) {
      setError("This file is larger than 5 MB. Please choose a smaller CSV for this in-browser tool.");
      event.target.value = "";
      return;
    }
    try {
      const parsed = parseCsv(await file.text());
      if (parsed.headers.length > 100) throw new Error("The CSV has more than 100 columns. Reduce it and upload again.");
      if (parsed.rows.length > 50000) throw new Error("The CSV has more than 50,000 rows. Reduce it and upload again.");
      setDataset(parsed);
      setFileName(file.name);
      setXColumn(parsed.headers[0] ?? "");
      const candidates = parsed.headers.filter((header) => parsed.rows.some((row) => row[header].trim() !== "" && Number.isFinite(Number(row[header]))));
      setYColumn(candidates[0] ?? "");
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "The CSV could not be read. Check the file format.");
    }
  }

  function exportChartData() {
    if (!chartData.length) return;
    const quote = (value: string | number) => '"' + String(value).replaceAll('"', '""') + '"';
    const text = [quote(xColumn) + "," + quote(yColumn), ...chartData.map((point) => quote(point.x) + "," + quote(point.y))].join("\r\n");
    const blob = new Blob([text], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "projectace-chart-data.csv";
    anchor.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="workbench">
      <div className="workbench-head">
        <div>
          <h2 className="workbench-title">CSV data explorer</h2>
          <p className="workbench-sub">Upload a table, choose two columns, inspect a chart, and export the plotted rows.</p>
        </div>
        <span className="badge">Runs in your browser</span>
      </div>
      <p className="note">Your file is read locally in this browser session. This tool does not upload it to a ProjectACE server or save it to a database. Values are treated as strings until a numeric chart or summary is requested.</p>
      <div className="field" style={{ marginTop: 18 }}>
        <label htmlFor="csv-file">Choose a CSV file (maximum 5 MB, 50,000 rows, 100 columns)</label>
        <input id="csv-file" type="file" accept=".csv,text/csv" onChange={onFileChange} />
        <span className="field-help">CSV should have one header row. Quoted commas and quoted fields are supported.</span>
      </div>
      {error && <p className="notice" role="alert" style={{ marginTop: 14 }}>{error}</p>}
      {dataset && (
        <div style={{ marginTop: 22 }}>
          <div className="stats-grid">
            <div className="stat"><span>File</span><strong style={{ fontSize: ".95rem" }}>{fileName}</strong></div>
            <div className="stat"><span>Rows loaded</span><strong>{dataset.rows.length.toLocaleString()}</strong></div>
            <div className="stat"><span>Columns</span><strong>{dataset.headers.length}</strong></div>
          </div>
          <div className="control-grid">
            <div className="field"><label htmlFor="x-column">Horizontal axis (X)</label><select id="x-column" value={xColumn} onChange={(event) => setXColumn(event.target.value)}>{dataset.headers.map((header) => <option key={header} value={header}>{header}</option>)}</select></div>
            <div className="field"><label htmlFor="y-column">Vertical axis (Y, numeric)</label><select id="y-column" value={yColumn} onChange={(event) => setYColumn(event.target.value)}>{numericColumns.map((header) => <option key={header} value={header}>{header}</option>)}</select></div>
            <div className="field"><label htmlFor="row-filter">Filter rows</label><input id="row-filter" value={filter} onChange={(event) => setFilter(event.target.value)} placeholder="Contains…" /></div>
          </div>
          {!numericColumns.length && <p className="notice">No numeric column was detected. Check that measurement values use ordinary numbers and the CSV has a header row.</p>}
          {summary && (
            <div className="stats-grid" aria-live="polite">
              <div className="stat"><span>Valid numeric values</span><strong>{summary.count.toLocaleString()}</strong></div>
              <div className="stat"><span>Mean</span><strong>{numberFormat.format(summary.mean)}</strong></div>
              <div className="stat"><span>Min / max</span><strong style={{ fontSize: "1rem" }}>{numberFormat.format(summary.min)} / {numberFormat.format(summary.max)}</strong></div>
            </div>
          )}
          {chartData.length > 0 && (
            <>
              <div className="chart-wrap" role="img" aria-label={"Line chart of " + yColumn + " versus " + xColumn}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData} margin={{ top: 8, right: 15, left: 0, bottom: 35 }}>
                    <CartesianGrid stroke="rgba(174,204,235,.12)" strokeDasharray="4 4" />
                    <XAxis dataKey="x" tick={{ fill: "#a2b3c8", fontSize: 11 }} angle={-24} textAnchor="end" interval="preserveStartEnd" height={55} />
                    <YAxis tick={{ fill: "#a2b3c8", fontSize: 11 }} width={65} />
                    <Tooltip contentStyle={{ background: "#091625", border: "1px solid rgba(174,204,235,.2)", borderRadius: 9, color: "#f2f7ff" }} />
                    <Line dataKey="y" name={yColumn} stroke="#55e6f2" strokeWidth={2} dot={false} activeDot={{ r: 4 }} isAnimationActive={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 14, flexWrap: "wrap", margin: "14px 0 23px" }}>
                <span className="quiet small">Chart limited to the first 2,500 valid rows after filtering.</span>
                <button className="button button-secondary button-small" type="button" onClick={exportChartData}>Export plotted data ↓</button>
              </div>
            </>
          )}
          <h3 style={{ fontFamily: "var(--display)" }}>Data preview</h3>
          <p className="muted small">Showing the first 10 of {visibleRows.length.toLocaleString()} filtered rows.</p>
          {visibleRows.length ? (
            <div className="preview-table-wrap">
              <table className="preview-table"><thead><tr>{dataset.headers.map((header) => <th key={header} scope="col">{header}</th>)}</tr></thead>
              <tbody>{visibleRows.slice(0, 10).map((row, index) => <tr key={index}>{dataset.headers.map((header) => <td key={header} title={row[header]}>{row[header] || <span className="quiet">(blank)</span>}</td>)}</tr>)}</tbody></table>
            </div>
          ) : <div className="empty-state"><h3>No rows match</h3><p>Change the filter to see the original data.</p></div>}
        </div>
      )}
    </div>
  );
}
