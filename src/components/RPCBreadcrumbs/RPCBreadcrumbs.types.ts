import { BreadcrumbItemProps, BreadcrumbProps } from 'react-bootstrap';
import { ButtonVariant } from 'react-bootstrap/esm/types';

export interface RPCBreadcrumbsProps extends BreadcrumbProps {
  activeItem?: string;
  asButtons?: boolean;
  items?: Array<BreadcrumbItemProps>;
  variant?: ButtonVariant;
}
