import { MouseEvent, ReactNode } from 'react';
import { DropDirection } from 'react-bootstrap/esm/DropdownContext';
import { DropdownItemProps } from 'react-bootstrap/esm/DropdownItem';
import { NavbarItemBaseProps } from '../RPCNavbar/RPCNavbar.types';
import { RPCNavbarLinkProps } from '../RPCNavbarLink/RPCNavbarLink.types';

export interface RPCNavbarDropdownItemProps
  extends NavbarItemBaseProps,
    Omit<DropdownItemProps, 'children'> {
  children?: Array<RPCNavbarDropdownItemProps> | ReactNode;
}

export interface RPCNavbarDropdownProps extends RPCNavbarLinkProps {
  activeChild?: string;
  activeItem?: string;
  badgeContent?: string;
  children?: ReactNode;
  drop?: DropDirection;
  errorContent?: string | ReactNode;
  icon?: ReactNode;
  id?: string;
  isError?: boolean;
  isLoading?: boolean;
  isSuperMenu?: boolean;
  items?: Array<RPCNavbarDropdownItemProps>;
  loadingLabel?: string;
  onFirstLevelChildItemClick?: (event: MouseEvent<HTMLDivElement>) => void;
  onItemClick?: (event: MouseEvent<HTMLDivElement>) => void;
  onSecondLevelChildItemClick?: (event: MouseEvent<HTMLDivElement>) => void;
  openOnHover?: boolean;
  show?: boolean;
  variant?: 'dark' | 'light' | string;
}
