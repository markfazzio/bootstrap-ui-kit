export const getRandomNumber = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min)) + min;

export const getRangeNumbers = (
  start: number,
  end?: number,
  step = 1,
): Array<number> => {
  const output = [];
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

export const getBooleanWithOdds = (odds: number): boolean => {
  const randomOdds = odds || 0.7;
  return Math.random() < randomOdds;
};

export const isNumeric = (str: string | number): boolean => {
  if (typeof str != 'string') return false;
  return !isNaN(parseFloat(str));
};
