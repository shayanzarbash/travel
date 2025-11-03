export const validateNationalCode = (code: string): boolean => {
  if (!/^\d{10}$/.test(code)) {
    return false;
  }
  const check = parseInt(code[9]);
  const sum = Array.from(code.slice(0, 9)).reduce(
    (acc, digit, index) => acc + parseInt(digit) * (10 - index),
    0,
  );
  const remainder = sum % 11;
  return (
    (remainder < 2 && check === remainder) ||
    (remainder >= 2 && check === 11 - remainder)
  );
};
