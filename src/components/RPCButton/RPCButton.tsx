import React, { memo, ReactElement } from 'react';
import { Button } from 'react-bootstrap';
import classNames from 'classnames';

import { RPCButtonProps } from './RPCButton.types';

// components
import { RPCBadge } from '../RPCBadge/RPCBadge';
import { RPCTooltip } from '../RPCTooltip/RPCTooltip';

const RPCButtonComponent = (props: RPCButtonProps): ReactElement => {
  const {
    active,
    badgeLabel,
    badgeTextColor = 'dark',
    badgeVariant = 'warning',
    children,
    circular,
    className,
    disabled,
    fluid,
    hasTooltip,
    icon,
    iconPosition = 'left',
    label,
    onClick,
    size,
    style,
    title,
    tooltipContent,
    tooltipPlacement,
    type,
    variant,
  } = props;

  const buttonClassNames = classNames({
    'has-badge': badgeLabel,
    'has-icon': icon,
    [`icon--${iconPosition}`]: iconPosition,
    circular: circular,
    'w-100': fluid,
    [`${className}`]: className,
  });

  const renderButton = (): ReactElement => {
    return (
      <Button
        active={active}
        className={buttonClassNames}
        disabled={disabled}
        onClick={onClick}
        size={size}
        style={style}
        title={title}
        type={type}
        variant={variant}>
        {label || icon || badgeLabel ? (
          <>
            {icon && iconPosition === 'left' ? icon : undefined}
            {label ? <span className="btn__label">{label}</span> : undefined}
            {badgeLabel ? (
              <RPCBadge bg={badgeVariant} text={badgeTextColor}>
                {badgeLabel}
              </RPCBadge>
            ) : undefined}
            {icon && iconPosition === 'right' ? icon : undefined}
          </>
        ) : (
          <>{children}</>
        )}
      </Button>
    );
  };

  return hasTooltip ? (
    <RPCTooltip tooltipPopper={renderButton()} placement={tooltipPlacement}>
      {tooltipContent}
    </RPCTooltip>
  ) : (
    renderButton()
  );
};

export const RPCButton = memo<RPCButtonProps>(RPCButtonComponent);
