import { ReactNode } from 'react';
import { OffcanvasProps } from 'react-bootstrap';

export interface RPCOffCanvasProps extends OffcanvasProps {
  actionsChildren?: ReactNode;
  backdrop?: boolean | 'static';
  children?: string | ReactNode;
  fluidHeader?: boolean;
  fluidContent?: boolean;
  variant?: 'dark' | 'light';
  title?: string;
}
