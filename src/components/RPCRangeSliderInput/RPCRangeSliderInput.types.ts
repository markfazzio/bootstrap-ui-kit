import { FormRangeProps } from 'react-bootstrap/esm/FormRange';
import { Variant } from 'react-bootstrap/esm/types';

export interface RPCRangeSliderInputProps extends FormRangeProps {
  label?: string;
  showText?: boolean;
  type?: 'degrees' | 'percentage';
  variant?: Variant;
}
