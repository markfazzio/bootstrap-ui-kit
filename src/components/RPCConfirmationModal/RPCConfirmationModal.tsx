import React, { memo, ReactElement } from 'react';
import { RPCConfirmationModalProps } from './RPCConfirmationModal.types';
import { RPCModal } from '../RPCModal/RPCModal';
import { RPCButton } from '../RPCButton/RPCButton';

const RPCConfirmationModalComponent = (
  props: RPCConfirmationModalProps,
): ReactElement => {
  const {
    backdrop,
    cancelLabel = 'Cancel',
    children,
    confirmLabel = 'Confirm',
    confirmVariant = 'danger',
    keyboard,
    onCancel,
    onConfirm,
    title = 'Are you sure?',
    show,
  } = props;

  return (
    <RPCModal
      backdrop={backdrop}
      className="confirmation-modal"
      variant="danger"
      footer={
        <div className="d-flex justify-content-center align-items-center w-100">
          <RPCButton
            className="me-2 w-100"
            label={confirmLabel}
            onClick={onConfirm}
            variant={confirmVariant}
          />
          <RPCButton className="w-100" label={cancelLabel} onClick={onCancel} />
        </div>
      }
      keyboard={keyboard}
      size="md"
      title={title}
      show={show}
      onHide={onCancel}>
      {children}
    </RPCModal>
  );
};

export const RPCConfirmationModal = memo<RPCConfirmationModalProps>(
  RPCConfirmationModalComponent,
);
