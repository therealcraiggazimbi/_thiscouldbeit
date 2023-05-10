const sum = (arr: number[]): number =>
  arr.reduce((total, num) => total + num, 0);

const validateISBN10 = (str: string): boolean => {
  if (str.length !== 10) return false;
  const weightedSum = sum(
    str
      .split("")
      .map(
        (digit, i) =>
          (digit.toUpperCase() === "X" ? 10 : parseInt(digit)) * (10 - i)
      )
  );
  return weightedSum % 11 === 0;
};

const validateISBN13 = (str: string): boolean => {
  if (str.length !== 13) return false;
  const weightedSum = sum(
    str.split("").map((digit, i) => parseInt(digit) * (i % 2 === 0 ? 1 : 3))
  );
  return weightedSum % 10 === 0;
};

const convertToISBN13 = (isbn10: string): string => {
  const prefix = "978";
  const isbnBase = `${prefix}${isbn10.slice(0, -1)}`;

  let checkDigit = 0;
  for (let i = 0; i < 10; i++) {
    const candidate = `${isbnBase}${i}`;
    if (validateISBN13(candidate)) {
      checkDigit = i;
      break;
    }
  }

  return `${isbnBase}${checkDigit}`;
};

const isbn13 = (str: string): string => {
  if (str.length === 13) return validateISBN13(str) ? "Valid" : "Invalid";
  return validateISBN10(str) ? convertToISBN13(str) : "Invalid";
};

export default validateISBN10;
