import { ReactNode } from 'react';
import { Variant } from 'react-bootstrap/esm/types';
import { RPCModalProps } from '../RPCModal/RPCModal.types';

export interface RPCConfirmationModalProps extends RPCModalProps {
  cancelLabel?: string;
  children?: ReactNode;
  confirmLabel?: string;
  confirmVariant?: Variant;
  onCancel?: () => void;
  onConfirm?: () => void;
}
