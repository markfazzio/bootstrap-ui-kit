import { DefaultOptionType } from 'rc-select/lib/Select';

export type valueof<T> = T[keyof T];

// forms
export type FormControlElement =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

export type FormInputValueType =
  | string
  | Array<string>
  | boolean
  | DefaultOptionType;

export type OpacityType = 0 | 25 | 50 | 75 | 100;
