export const reduceNumber = (num: number): string => {
  const stringNum = String(num);
  const numLengt = stringNum.length;

  if (numLengt === 10) {
    return `${stringNum.slice(0, 1)} billion...`;
  }
  if (numLengt === 11) {
    return `${stringNum.slice(0, 2)} billions...`;
  }
  if (numLengt === 12) {
    return `${stringNum.slice(0, 3)} billions...`;
  }

  return String(num);
};
