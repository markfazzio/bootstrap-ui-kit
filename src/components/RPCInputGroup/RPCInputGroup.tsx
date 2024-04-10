import React, { memo, ReactElement } from 'react';
import { InputGroup } from 'react-bootstrap';

// types
import { RPCInputGroupProps } from './RPCInputGroup.types';

const RPCInputGroupComponent = (props: RPCInputGroupProps): ReactElement => {
  const { children, icon } = props;

  return (
    <InputGroup>
      {icon && <InputGroup.Text>{icon}</InputGroup.Text>}
      {children}
    </InputGroup>
  );
};

export const RPCInputGroup = memo<RPCInputGroupProps>(RPCInputGroupComponent);
