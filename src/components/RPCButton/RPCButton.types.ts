import { ReactNode } from 'react';
import { ButtonProps } from 'react-bootstrap';
import { Color, Placement, Variant } from 'react-bootstrap/esm/types';

export interface RPCButtonProps extends ButtonProps {
  badgeLabel?: string;
  badgeTextColor?: Color;
  badgeVariant?: Variant;
  circular?: boolean;
  fluid?: boolean;
  hasTooltip?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  label?: string;
  tooltipContent?: string;
  tooltipPlacement?: Placement;
  type?: 'button' | 'submit';
}
