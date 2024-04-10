import { ReactNode } from 'react';
import { AlertProps } from 'react-bootstrap';

export interface RPCAlertProps extends AlertProps {
  icon?: ReactNode;
  isFixed?: boolean;
  offsetTop?: number;
}
