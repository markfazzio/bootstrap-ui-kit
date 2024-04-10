import React, { memo, ReactElement } from 'react';
import { Nav } from 'react-bootstrap';

// components
import { RPCBadge } from '../RPCBadge/RPCBadge';

// types
import { RPCNavbarLinkProps } from './RPCNavbarLink.types';

const RPCNavbarLinkComponent = (props: RPCNavbarLinkProps): ReactElement => {
  const { active, badgeContent, icon, label, onClick } = props;

  return (
    <Nav.Link onClick={onClick} active={active} className="nav-item">
      <>
        {icon ? <span className="nav-item__icon pe-2">{icon}</span> : undefined}
        {label}
        {badgeContent ? (
          <span className="nav-item__badge">
            <RPCBadge bg="primary">{badgeContent}</RPCBadge>
          </span>
        ) : undefined}
      </>
    </Nav.Link>
  );
};

export const RPCNavbarLink = memo<RPCNavbarLinkProps>(RPCNavbarLinkComponent);
