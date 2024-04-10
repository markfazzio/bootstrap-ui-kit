import React, { memo, ReactElement } from 'react';
import { Form } from 'react-bootstrap';
import classNames from 'classnames';

// types
import { RPCColorPickerProps } from './RPCColorPicker.types';

// utils
import { isLightText, isPrimaryLabel } from '../../common/utils/color-util';

const RPCColorPickerComponent = (props: RPCColorPickerProps): ReactElement => {
  const {
    disabled,
    emptyValueLabel = 'None',
    id,
    label,
    onChange,
    value = '#000000',
    variant = 'white',
  } = props;

  const colorPickerClassNames = classNames({
    'rpc-color-picker form-control w-100 d-flex m-0': true,
    [`bg-${variant}`]: variant,
    [`text-light`]: variant && isLightText(variant),
  });

  const colorPickerLabelClassNames = classNames({
    'rpc-color-picker__label d-block': true,
    [`label-primary`]: variant && isPrimaryLabel(variant),
  });

  return (
    <Form.Label htmlFor={id} className={colorPickerClassNames}>
      <div className="lh-1">
        <span className={colorPickerLabelClassNames}>{label}</span>
        <span className="d-block rpc-color-picker__value">
          {value ? value.toUpperCase() : emptyValueLabel}
        </span>
      </div>
      <Form.Control
        className="ms-auto"
        disabled={disabled}
        id={id}
        onChange={onChange}
        title="Choose your color"
        type="color"
        value={value}
      />
    </Form.Label>
  );
};

export const RPCColorPicker = memo<RPCColorPickerProps>(
  RPCColorPickerComponent,
);
