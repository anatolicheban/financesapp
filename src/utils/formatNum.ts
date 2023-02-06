export function formatNum(num: number): string {
  if (num > 1000000000) {
    return `${(num / 1000000000).toFixed(3)}B`;
  }
  if (num / 1000000 > 1) {
    return `${(num / 1000000).toFixed(3)}M`;
  } else if (num / 10000 > 1) {
    return `${(num / 1000).toFixed(2)}K`;
  }
  return num.toString();
}
