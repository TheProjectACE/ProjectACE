export type CsvRow = Record<string, string>;
export type CsvDocument = { headers: string[]; rows: CsvRow[] };

export function parseCsv(text: string): CsvDocument {
  const source = text.replace(/^\uFEFF/, "");
  if (!source.trim()) throw new Error("The file is empty. Upload a CSV with a header row and data rows.");

  const records: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let quoted = false;

  for (let index = 0; index < source.length; index += 1) {
    const char = source[index];

    if (char === '"') {
      if (quoted && source[index + 1] === '"') {
        cell += '"';
        index += 1;
      } else {
        quoted = !quoted;
      }
    } else if (char === "," && !quoted) {
      row.push(cell);
      cell = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && source[index + 1] === "\n") index += 1;
      row.push(cell);
      if (row.some((value) => value.trim() !== "")) records.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }

  if (quoted) throw new Error("A quoted field was not closed. Check the CSV around the last quoted value.");
  row.push(cell);
  if (row.some((value) => value.trim() !== "")) records.push(row);

  if (records.length < 2) throw new Error("Add a header row and at least one data row.");
  const rawHeaders = records[0].map((value) => value.trim());
  const seen = new Map<string, number>();
  const headers = rawHeaders.map((value, index) => {
    const base = value || "column_" + (index + 1);
    const count = (seen.get(base) || 0) + 1;
    seen.set(base, count);
    return count === 1 ? base : base + "_" + count;
  });

  const rows = records.slice(1).map((values, recordIndex) => {
    if (values.length > headers.length && values.slice(headers.length).some((value) => value.trim() !== "")) {
      throw new Error("Row " + (recordIndex + 2) + " has more values than the header. Check commas and quoted fields.");
    }
    return Object.fromEntries(headers.map((header, columnIndex) => [header, (values[columnIndex] ?? "").trim()])) as CsvRow;
  });

  return { headers, rows };
}

export function numericValues(rows: CsvRow[], column: string): number[] {
  return rows
    .map((row) => row[column]?.trim() ?? "")
    .filter((value) => value !== "")
    .map(Number)
    .filter((value) => Number.isFinite(value));
}

export function summarizeNumbers(values: number[]) {
  if (!values.length) return null;
  const sorted = [...values].sort((a, b) => a - b);
  return {
    count: values.length,
    min: sorted[0],
    max: sorted[sorted.length - 1],
    mean: values.reduce((sum, value) => sum + value, 0) / values.length,
  };
}
