import { ReactNode } from 'react';
import { OverlayTriggerProps, TooltipProps } from 'react-bootstrap';

export interface RPCTooltipProps
  extends TooltipProps,
    Omit<OverlayTriggerProps, 'children' | 'overlay'> {
  tooltipPopper?: ReactNode;
  transparent?: boolean;
}
