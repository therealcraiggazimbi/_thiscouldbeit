import validateISBN10 from "../isbn";

test("Valid ISBN-13", () => {
  expect(validateISBN10("9780316066525")).toBe(false);
});

test("Invalid ISBN-10", () => {
  expect(validateISBN10("0330301824")).toBe(false);
});

test("Valid ISBN-10", () => {
  expect(validateISBN10("0316066524")).toBe(true);
});

test("Invalid input", () => {
  expect(validateISBN10("123456789")).toBe(false);
});

test("Invalid ISBN-13", () => {
  expect(validateISBN10("9780316066526")).toBe(false);
});
