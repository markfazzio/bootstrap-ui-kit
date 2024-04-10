import { Variant } from 'react-bootstrap/esm/types';
import { BaseInputProps } from '../../common/interfaces';

export interface RPCToggleSwitchProps extends Omit<BaseInputProps, 'onChange'> {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  optionLabels?: Array<string>;
  small?: boolean;
  stacked?: boolean;
  variant?: Variant;
}
