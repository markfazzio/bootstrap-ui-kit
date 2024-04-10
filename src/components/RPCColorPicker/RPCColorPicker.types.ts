import { FormControlProps } from 'react-bootstrap';
import { Variant } from 'react-bootstrap/esm/types';

export interface RPCColorPickerProps extends Omit<FormControlProps, 'value'> {
  emptyValueLabel?: string;
  label?: string;
  value?: string;
  variant?: Variant;
}
