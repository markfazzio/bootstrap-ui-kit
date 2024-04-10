import { ReactNode, SVGProps } from 'react';
import { FormControlProps } from 'react-bootstrap';

export interface BaseInputProps extends FormControlProps {
  autoFocus?: boolean;
  isClearable?: boolean;
  label?: string | ReactNode;
  name?: string;
  placeholder?: string;
  required?: boolean;
}

export interface BaseIconProps extends SVGProps<SVGElement> {
  fillAlt?: string;
}

export interface OptionType {
  label: string;
  key?: string;
  value: string;
  [key: string]: string;
}
