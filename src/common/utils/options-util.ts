import { DefaultOptionType } from 'rc-select/lib/Select';

export function getOptionsFromObject(inputObj: any): Array<DefaultOptionType> {
  const arrayValues = Object.values(inputObj);
  return arrayValues.map((item: { label: string; value: string }) => {
    return {
      label: item.label,
      value: item.value,
    };
  });
}
