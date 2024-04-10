import { ReactNode } from 'react';
import { ModalProps } from 'react-bootstrap';
import { Variant } from 'react-bootstrap/esm/types';

export interface RPCModalProps extends ModalProps {
  dismissible?: boolean;
  footer?: ReactNode;
  title?: string | ReactNode;
  variant?: Variant;
}
