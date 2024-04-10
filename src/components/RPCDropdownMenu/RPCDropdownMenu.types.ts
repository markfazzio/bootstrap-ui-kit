import { ReactNode } from 'react';
import { Variant } from 'react-bootstrap/esm/types';
import { SelectProps } from 'rc-select';
import { DefaultOptionType } from 'rc-select/lib/Select';

export interface RPCDropdownMenuProps extends SelectProps {
  active?: boolean;
  disabled?: boolean;
  inline?: boolean;
  label?: string | ReactNode;
  renderOption?: (option: DefaultOptionType) => ReactNode;
  size?: 'sm' | 'lg';
  variant?: Variant;
}
