import React, { memo, ReactElement } from 'react';
import { Toast, ToastProps } from 'react-bootstrap';

const RPCToastMessageComponent = (props: ToastProps): ReactElement => {
  const { delay = 3000, children, onClose, show } = props;
  return (
    <Toast onClose={onClose} show={show} delay={delay} autohide>
      <Toast.Body>{children}</Toast.Body>
    </Toast>
  );
};

export const RPCToastMessage = memo<ToastProps>(RPCToastMessageComponent);
