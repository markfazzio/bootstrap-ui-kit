import React, { memo, ReactElement } from 'react';
import { BadgeProps, Badge } from 'react-bootstrap';

const BadgeComponent = (props: BadgeProps): ReactElement => {
  const { bg, children, pill, text } = props;
  return (
    <Badge bg={bg} pill={pill} text={text}>
      {children}
    </Badge>
  );
};

export const RPCBadge = memo<BadgeProps>(BadgeComponent);
