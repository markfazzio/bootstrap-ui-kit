import { DefaultOptionType } from 'rc-select/lib/Select';

// other util
import { isNumeric } from './number-util';

export const flattenMultiDimensionalArray = (arr: Array<any>) => {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(
      Array.isArray(toFlatten)
        ? flattenMultiDimensionalArray(toFlatten)
        : toFlatten,
    );
  }, []);
};

export const getValuesFromOptions = (
  options: Array<DefaultOptionType>,
): Array<string | number> | [] => {
  if (!options || !options.length) return [];

  return options.map((option: DefaultOptionType) => {
    const returnedValue = isNumeric(option.value)
      ? option.value.toString()
      : option.value;
    return returnedValue;
  });
};

export const moveArrayElementUp = (arr: Array<any>, currentIndex: number) => {
  if (currentIndex > 0) {
    let el = arr[currentIndex];
    arr[currentIndex] = arr[currentIndex - 1];
    arr[currentIndex - 1] = el;
  }
  return [...arr];
};

export const moveArrayElementDown = (arr: Array<any>, currentIndex: number) => {
  if (currentIndex !== -1 && currentIndex < arr.length - 1) {
    let el = arr[currentIndex];
    arr[currentIndex] = arr[currentIndex + 1];
    arr[currentIndex + 1] = el;
  }
  return [...arr];
};
