import assert from "node:assert/strict";
import { test } from "node:test";
import { parseCsv, numericValues, summarizeNumbers } from "../lib/csv";
import { departments, projects, projectStatuses } from "../lib/data";

test("CSV parser preserves commas and escaped quotes inside quoted cells", () => {
  const parsed = parseCsv('name,note,value\r\n"ACE, Lab","said ""hello""",12\r\n');
  assert.deepEqual(parsed.headers, ["name", "note", "value"]);
  assert.equal(parsed.rows[0].name, "ACE, Lab");
  assert.equal(parsed.rows[0].note, 'said "hello"');
  assert.equal(parsed.rows[0].value, "12");
});
test("CSV parser handles UTF-8 BOM, CRLF, and blank lines", () => {
  const parsed = parseCsv('\uFEFFdate,value\r\n2026-01-01,2\r\n\r\n2026-01-02,4\r\n');
  assert.equal(parsed.rows.length, 2);
  assert.equal(parsed.headers[0], "date");
});
test("CSV parser rejects empty input, missing rows, and unclosed quote", () => {
  assert.throws(() => parseCsv("  "), /empty/i);
  assert.throws(() => parseCsv("one,two"), /header row and at least one data row/i);
  assert.throws(() => parseCsv('name,note\nAda,"unfinished'), /not closed/i);
});
test("CSV parser gives duplicate and blank header columns stable names", () => {
  const parsed = parseCsv("value,value,\n1,2,3");
  assert.deepEqual(parsed.headers, ["value", "value_2", "column_3"]);
  assert.equal(parsed.rows[0].column_3, "3");
});
test("numeric helpers ignore blanks and invalid values", () => {
  const parsed = parseCsv("x,y\na,1\nb,\nc,not-a-number\nd,5");
  const values = numericValues(parsed.rows, "y");
  assert.deepEqual(values, [1, 5]);
  assert.deepEqual(summarizeNumbers(values), { count: 2, min: 1, max: 5, mean: 3 });
  assert.equal(summarizeNumbers([]), null);
});
test("all six department slugs and project statuses are represented", () => {
  assert.deepEqual(departments.map((d) => d.slug), ["aeroace", "aquaace", "landace", "roboace", "astroace", "ace-canvas"]);
  assert.deepEqual(projectStatuses, ["Proposed", "In Progress", "Testing", "Published", "Archived"]);
  for (const project of projects) {
    assert.ok(departments.some((d) => d.slug === project.departmentSlug), project.slug + " has a valid department");
    assert.ok(projectStatuses.includes(project.status), project.slug + " has a valid status");
    assert.ok(project.title.trim().length > 0);
  }
});
