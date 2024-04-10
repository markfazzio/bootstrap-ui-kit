import React, { memo, ReactElement } from 'react';
import Form from 'react-bootstrap/Form';

// types
import { RPCRangeSliderInputProps } from './RPCRangeSliderInput.types';
import classNames from 'classnames';
import { isLightText, isPrimaryLabel } from '../../common/utils/color-util';

const RangeSliderInputComponent = (
  props: RPCRangeSliderInputProps,
): ReactElement => {
  const {
    className,
    disabled,
    id,
    label,
    min,
    max,
    onChange,
    showText = true,
    step,
    type,
    value,
    variant = 'white',
  } = props;

  const numericVal = !!value ? Number(value) * 100 : 0;
  const fixedNum = numericVal.toFixed();
  const defaultValue = value || 0;

  const rangeSliderClassNames = classNames({
    'rpc-range-slider-input form-control': true,
    [`bg-${variant}`]: variant,
    [`text-light`]: variant && isLightText(variant),
    [`${className}`]: className,
  });

  const rangeSliderLabelClassNames = classNames({
    'mb-0': true,
    [`label-primary`]: variant && isPrimaryLabel(variant),
  });

  return (
    <Form.Group
      controlId={id}
      className={rangeSliderClassNames}
      aria-disabled={disabled}>
      {label && (
        <Form.Label className={rangeSliderLabelClassNames}>{label}</Form.Label>
      )}
      <div className="rpc-range-slider-input__input-container d-flex align-items-center lh-1">
        <Form.Range
          className="rpc-range-slider-input__slider"
          disabled={disabled}
          onChange={onChange}
          min={min}
          max={max}
          step={step}
          value={defaultValue}
        />
        {showText ? (
          <div className="rpc-range-slider-input__value">
            <small>
              {step && step === 0.01 ? fixedNum : defaultValue}
              {type && type === 'degrees' ? '°' : '%'}
            </small>
          </div>
        ) : undefined}
      </div>
    </Form.Group>
  );
};

export const RPCRangeSliderInput = memo<RPCRangeSliderInputProps>(
  RangeSliderInputComponent,
);
