import classNames from 'classnames';
import React, { memo, ReactElement } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

// types
import { RPCTooltipProps } from './RPCTooltip.types';

const RPCTooltipComponent = (props: RPCTooltipProps): ReactElement => {
  const {
    children,
    id,
    placement = 'right',
    tooltipPopper,
    show,
    transparent,
  } = props;

  const tooltipClassNames = classNames({
    transparent: transparent,
  });

  return (
    <OverlayTrigger
      placement={placement}
      // delay={{show: 250, hide: 400}}
      overlay={
        <Tooltip
          id={id || `tooltip-${placement}`}
          show={show}
          className={tooltipClassNames}>
          {children}
        </Tooltip>
      }
      rootClose>
      <div className="tooltip-popper">{tooltipPopper}</div>
    </OverlayTrigger>
  );
};

export const RPCTooltip = memo<RPCTooltipProps>(RPCTooltipComponent);
