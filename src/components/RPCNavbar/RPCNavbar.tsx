import React, { CSSProperties, Fragment, memo, ReactElement } from 'react';
import { Nav, Navbar, Offcanvas } from 'react-bootstrap';
import classNames from 'classnames';

// types
import { RPCNavbarProps, NavbarRightItemType } from './RPCNavbar.types';

// components
import { RPCNavbarDropdown } from '../RPCNavbarDropdown/RPCNavbarDropdown';
import { RPCNavbarLink } from '../RPCNavbarLink/RPCNavbarLink';
import { IconMenu } from '../icons/basic-icons/IconMenu';

const RPCNavbarComponent = (props: RPCNavbarProps): ReactElement => {
  const {
    children,
    className,
    extraOptionsMobile,
    isMobileShowing,
    isSubNav,
    logo,
    navbarRightChildren,
    navbarRightItems,
    onHideMobileMenu,
    onLogoClick,
    offsetTop,
    openDropdownsOnHover = true,
    onToggleClick,
    searchComponent,
    slideInBgVariant,
    slideInTextVariant,
    toggleIcon,
    type = 'pills',
    variant = 'dark',
  } = props;

  const navbarClassNames = classNames({
    'rpc-navbar': true,
    'rpc-navbar--sub-nav': isSubNav,
    [`${className}`]: className,
  });

  const navbarNavClassNames = classNames({
    'me-auto': true,
    'rpc-navbar-nav': true,
  });

  const navbarNavRightClassNames = classNames({
    'rpc-navbar-nav': true,
    'rpc-navbar__right': true,
  });

  const navbarStyle: CSSProperties = {
    top: offsetTop || undefined,
  };

  const navbarSlideInClassNames = classNames({
    'rpc-navbar__offcanvas': true,
    [`bg-${slideInBgVariant || 'light'}`]: true,
    [`text-${slideInTextVariant || 'dark'}`]: true,
  });

  // TODO: future prop?
  const expand = 'lg';

  return (
    <Navbar
      bg={variant}
      className={navbarClassNames}
      collapseOnSelect
      data-bs-theme={variant}
      expand="xl"
      fixed="top"
      style={navbarStyle}>
      <div className="container-fluid">
        {logo ? (
          <Nav.Link className="logo-link" onClick={onLogoClick}>
            <Navbar.Brand>{logo}</Navbar.Brand>
          </Nav.Link>
        ) : undefined}
        {extraOptionsMobile ? (
          <div className="mobile-options">{extraOptionsMobile}</div>
        ) : undefined}
        <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand-${expand}`}
          onClick={onToggleClick}>
          {toggleIcon || (
            <IconMenu
              width={24}
              height={24}
              fill={variant && variant === 'dark' ? '#fff' : '#000'}
            />
          )}
        </Navbar.Toggle>
        <Navbar.Offcanvas
          className={navbarSlideInClassNames}
          id={`offcanvasNavbar-expand-${expand}`}
          onHide={onHideMobileMenu}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
          show={isMobileShowing}>
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className={navbarNavClassNames} variant={type}>
              <>{children}</>
            </Nav>
            {searchComponent ? (
              <div className="rpc-navbar__search d-flex align-items-center justify-content-center">
                {searchComponent}
              </div>
            ) : undefined}
            {(navbarRightItems && navbarRightItems.length) ||
            navbarRightChildren ? (
              <Nav className={navbarNavRightClassNames} variant={type}>
                {navbarRightItems && navbarRightItems.length
                  ? navbarRightItems.map(
                      (item: NavbarRightItemType, index: number) => (
                        <Fragment key={`item_${index}--${item.label}`}>
                          {item.type === 'dropdown' ? (
                            <RPCNavbarDropdown
                              badgeContent={item.badgeContent}
                              icon={item.icon}
                              items={item.items}
                              label={item.label}
                              openOnHover={openDropdownsOnHover}
                              variant={variant}
                            />
                          ) : (
                            <RPCNavbarLink
                              badgeContent={item.badgeContent}
                              icon={item.icon}
                              label={item.label}
                              onClick={item.onClick}
                            />
                          )}
                        </Fragment>
                      ),
                    )
                  : undefined}
                {navbarRightChildren ? (
                  <div className="d-flex align-items-center rpc-navbar__right__children">
                    {navbarRightChildren}
                  </div>
                ) : undefined}
              </Nav>
            ) : undefined}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </div>
    </Navbar>
  );
};

export const RPCNavbar = memo<RPCNavbarProps>(RPCNavbarComponent);
