import React, {
  ChangeEvent,
  memo,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';
import classNames from 'classnames';
import { Form } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

// types
import { RPCTextInputProps } from './RPCTextInput.types';

// components
import { RPCButton } from '../RPCButton/RPCButton';
import { IconCaretUp } from '../icons/basic-icons/IconCaretUp';
import { IconCaretDown } from '../icons/basic-icons/IconCaretDown';
import { isLightText, isPrimaryLabel } from '../../common/utils/color-util';
import { IconRemove } from '../icons/basic-icons/IconRemove';

const RPCTextInputComponent = (props: RPCTextInputProps): ReactElement => {
  const {
    autoFocus,
    className,
    disabled,
    helperText,
    id,
    inputMode,
    isArrowDownDisabled,
    isArrowUpDisabled,
    isClearable = true,
    isFocused,
    isInvalid,
    isValid,
    label,
    max,
    min,
    maxLength,
    name,
    onArrowDownClick,
    onArrowUpClick,
    onChange,
    onClear,
    placeholder,
    plaintext,
    required,
    size,
    type,
    value,
    variant = 'white',
  } = props;
  const [cursor, setCursor] = useState(null);
  const ref = useRef(null);

  const textInputClassNames = classNames({
    'rpc-text-input': true,
    'rpc-text-input--disabled': disabled,
    'rpc-text-input--numeric': inputMode === 'numeric',
    [`${className}`]: className,
    [`label-light`]: variant && isLightText(variant),
    [`label-primary`]: variant && isPrimaryLabel(variant) && !disabled,
  });

  const textInputFormControlClassNames = classNames({
    [`bg-${variant}`]: variant && !disabled,
    [`text-light`]: variant && isLightText(variant),
  });

  const textInputClearClassNames = classNames({
    'input-clear position-absolute': true,
    'bg-white': !disabled,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCursor(e.target.selectionStart);
    onChange && onChange(e);
  };

  useEffect(() => {
    const input = ref.current;
    if (input && type !== 'email') input.setSelectionRange(cursor, cursor);
  }, [ref, cursor, value]);

  useEffect(() => {
    if (isFocused && ref && ref.current !== undefined) ref.current.focus();
  }, [isFocused]);

  return (
    <>
      <FloatingLabel
        controlId={id}
        label={label}
        className={textInputClassNames}>
        <Form.Control
          autoFocus={autoFocus}
          className={textInputFormControlClassNames}
          disabled={disabled}
          inputMode={inputMode}
          isInvalid={isInvalid}
          isValid={isValid}
          max={max}
          maxLength={maxLength}
          min={min}
          name={name}
          onChange={handleChange}
          placeholder={placeholder}
          plaintext={plaintext}
          ref={ref}
          required={required}
          size={size}
          type={type}
          value={value}
        />
        {inputMode === 'numeric' ? (
          <div className="input-arrows">
            <RPCButton
              className="arrow up"
              disabled={isArrowUpDisabled || disabled}
              size="sm"
              title="Increment Value"
              variant="link"
              onClick={onArrowUpClick}>
              <IconCaretUp />
            </RPCButton>
            <RPCButton
              className="arrow down"
              disabled={isArrowDownDisabled || disabled}
              size="sm"
              title="Decrement value"
              variant="link"
              onClick={onArrowDownClick}>
              <IconCaretDown />
            </RPCButton>
          </div>
        ) : undefined}
        {isClearable && value ? (
          <RPCButton
            className={textInputClearClassNames}
            disabled={disabled}
            icon={<IconRemove fill="#cc0000" />}
            title="Clear"
            variant="link"
            onClick={onClear}
          />
        ) : undefined}
      </FloatingLabel>
      {helperText ? (
        <div className="field-help">
          <small>{helperText}</small>
        </div>
      ) : undefined}
    </>
  );
};

export const RPCTextInput = memo<RPCTextInputProps>(RPCTextInputComponent);
