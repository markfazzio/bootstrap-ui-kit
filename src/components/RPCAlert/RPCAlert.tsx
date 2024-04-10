import classNames from 'classnames';
import React, { CSSProperties, memo, ReactElement, useState } from 'react';
import { Alert } from 'react-bootstrap';

// types
import { RPCAlertProps } from './RPCAlert.types';

const AlertComponent = (props: RPCAlertProps): ReactElement => {
  const {
    className,
    children,
    dismissible,
    icon,
    isFixed,
    offsetTop,
    onClose,
    show,
    variant,
  } = props;

  const [isAlertShowing, setIsAlertShowing] = useState(show);

  const alertClassNames = classNames({
    'rpc-alert border-0 rounded-0': true,
    'rpc-alert--fixed mb-0 w-100 fixed-top': isFixed,
    [`${className}`]: className,
  });

  const alertStyles: CSSProperties | undefined = offsetTop
    ? {
        top: `${offsetTop}px`,
      }
    : undefined;

  return (
    <Alert
      className={alertClassNames}
      dismissible={dismissible}
      onClose={() => {
        setIsAlertShowing(false);
        if (onClose) onClose;
      }}
      show={dismissible ? isAlertShowing : show}
      style={alertStyles}
      variant={variant}>
      <div className="rpc-alert__content d-flex align-items-center">
        {icon ? (
          <div className="rpc-alert__icon me-3 lh-0">{icon}</div>
        ) : undefined}
        <div className="rpc-alert__message">{children}</div>
      </div>
    </Alert>
  );
};

export const RPCAlert = memo<RPCAlertProps>(AlertComponent);
