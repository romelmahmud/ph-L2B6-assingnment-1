// Solution 1

const formatValue = (
  value: number | string | boolean
): number | string | boolean => {
  if (typeof value === "number") {
    return value * 10;
  }
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return !value;
};
