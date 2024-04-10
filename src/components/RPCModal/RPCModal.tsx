import classNames from 'classnames';
import React, { memo, ReactElement } from 'react';
import { Modal } from 'react-bootstrap';

// types
import { RPCModalProps } from './RPCModal.types';

// util
import { isLightText } from '../../common/utils/color-util';

const ModalComponent = (props: RPCModalProps): ReactElement => {
  const {
    backdrop,
    children,
    centered = true,
    className,
    closeVariant,
    dismissible,
    footer,
    fullscreen,
    keyboard,
    onHide,
    onShow,
    scrollable,
    show,
    size = 'lg',
    title,
    variant,
  } = props;

  const modalClassNames = classNames({
    'rpc-modal': true,
    [`${className}`]: className,
  });

  const modalHeaderClassNames = classNames({
    [`bg-${variant}`]: variant,
    [`text-light`]: variant && isLightText(variant),
  });

  return (
    <Modal
      backdrop={backdrop}
      centered={centered}
      className={modalClassNames}
      fullscreen={fullscreen}
      keyboard={keyboard}
      onHide={onHide}
      onShow={onShow}
      scrollable={scrollable}
      show={show}
      size={size}>
      {dismissible || title ? (
        <Modal.Header
          className={modalHeaderClassNames}
          closeVariant={
            closeVariant || isLightText(variant) ? 'white' : undefined
          }
          closeButton={dismissible}>
          {title ? <Modal.Title>{title}</Modal.Title> : undefined}
        </Modal.Header>
      ) : undefined}
      <Modal.Body>{children}</Modal.Body>
      {footer ? <Modal.Footer>{footer}</Modal.Footer> : undefined}
    </Modal>
  );
};

export const RPCModal = memo<RPCModalProps>(ModalComponent);
