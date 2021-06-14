export function getNextMaxValue(arr: number[]): number {
  const maxValue = Math.max.apply(Math, arr); 
  return maxValue === Number.NEGATIVE_INFINITY ? 1 : maxValue + 1;
};
