import { ButtonGroupProps } from 'react-bootstrap';
import { Variant } from 'react-bootstrap/esm/types';
import { OptionType } from '../../common/interfaces';

export interface RPCButtonGroupProps extends ButtonGroupProps {
  activeIndex?: number;
  onOptionSelect?: (option: OptionType) => void;
  options?: Array<OptionType>;
  variant: Variant;
}
