import { ReactNode } from 'react';
import { NavbarProps } from 'react-bootstrap';
import { RPCNavbarDropdownItemProps } from '../RPCNavbarDropdown/RPCNavbarDropdown.types';
import { Variant } from 'react-bootstrap/esm/types';

export interface NavbarItemBaseProps {
  active?: boolean;
  badgeContent?: string;
  id?: string;
  label?: string | ReactNode;
  icon?: ReactNode;
}

export interface NavbarRightItemType extends NavbarItemBaseProps {
  items?: Array<RPCNavbarDropdownItemProps>;
  onClick?: () => void;
  type?: 'dropdown' | 'link';
}

export interface RPCNavbarProps extends NavbarProps {
  children?: ReactNode;
  className?: string;
  extraOptionsMobile?: ReactNode;
  isMobileShowing?: boolean;
  isSubNav?: boolean;
  logo?: ReactNode;
  navbarRightChildren?: ReactNode;
  navbarRightItems?: Array<NavbarRightItemType>;
  offsetTop?: string;
  onHideMobileMenu?: () => void;
  onLogoClick?: () => void;
  onToggleClick?: () => void;
  openDropdownsOnHover?: boolean;
  searchComponent?: ReactNode;
  slideInBgVariant?: Variant;
  slideInTextVariant?: Variant;
  toggleIcon?: ReactNode;
  type?: 'tabs' | 'pills';
}
