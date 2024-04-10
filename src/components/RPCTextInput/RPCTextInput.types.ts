import { FocusEventHandler } from 'react';
import { BaseInputProps } from '../../common/interfaces';
import { Variant } from 'react-bootstrap/esm/types';

export interface RPCTextInputProps extends BaseInputProps {
  floatingLabel?: boolean;
  helperText?: string;
  isArrowDownDisabled?: boolean;
  isArrowUpDisabled?: boolean;
  isFocused?: boolean;
  max?: number | string;
  maxLength?: number;
  min?: number | string;
  onArrowDownClick?: () => void;
  onArrowUpClick?: () => void;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onClear?: () => void;
  variant?: Variant;
}
