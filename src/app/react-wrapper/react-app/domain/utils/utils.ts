export function getNextMaxValue(arr: number[]): number {
  const maxValue = Math.max.apply(Math, arr);
  return maxValue === Number.NEGATIVE_INFINITY ? 1 : maxValue + 1;
};

export const convertFile = (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
};
