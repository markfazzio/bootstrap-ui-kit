import React, { memo, ReactElement } from 'react';
import { Form, FormCheckProps } from 'react-bootstrap';

import './RPCCheckbox.scss';

const RPCCheckboxComponent = (props: FormCheckProps): ReactElement => {
  const { id, label, checked, onChange } = props;

  return (
    <Form.Check id={id} label={label} checked={checked} onChange={onChange} />
  );
};

export const RPCCheckbox = memo<FormCheckProps>(RPCCheckboxComponent);
