import React, { KeyboardEvent, memo, ReactElement } from 'react';
import classNames from 'classnames';

// types
import { RPCToggleSwitchProps } from './RPCToggleSwitch.types';

// utils
import { isLightText, isPrimaryLabel } from '../../common/utils/color-util';

// components

const ToggleSwitchComponent = (props: RPCToggleSwitchProps): ReactElement => {
  const {
    checked,
    className,
    disabled,
    id = 'rpc-toggle-switch',
    label,
    name,
    onChange,
    optionLabels,
    small,
    stacked,
    variant = 'white',
  } = props;

  function handleKeyPress(e: KeyboardEvent<HTMLLabelElement>) {
    if (e.keyCode !== 32) return;

    e.preventDefault();
    onChange(!checked);
  }

  const toggleSwitchWrapperClassNames = classNames({
    'toggle-switch-wrapper form-control': true,
    stacked: stacked,
    [`${className}`]: className,
    [`bg-${variant}`]: variant,
    [`text-light`]: variant && isLightText(variant),
  });

  const toggleSwitchClassNames = classNames({
    'toggle-switch': true,
    small: small,
  });

  const toggleSwitchLabelClassNames = classNames({
    'toggle-switch-label-text': true,
    [`label-primary`]: variant && isPrimaryLabel(variant),
  });

  return (
    <div className={toggleSwitchWrapperClassNames}>
      <div className={toggleSwitchLabelClassNames}>{label}</div>
      <div className={toggleSwitchClassNames}>
        <input
          type="checkbox"
          name={name}
          className="toggle-switch-checkbox"
          id={id}
          checked={checked}
          onChange={e => onChange(e.target.checked)}
          disabled={disabled}
        />
        <label
          className="toggle-switch-label"
          htmlFor={id}
          tabIndex={disabled ? -1 : 1}
          onKeyDown={e => {
            handleKeyPress(e);
          }}>
          <span
            className={
              disabled
                ? 'toggle-switch-inner toggle-switch-disabled'
                : 'toggle-switch-inner'
            }
            data-yes={(optionLabels && optionLabels[0]) || 'On'}
            data-no={(optionLabels && optionLabels[1]) || 'Off'}
            tabIndex={-1}
          />
          <span
            className={
              disabled
                ? 'toggle-switch-switch toggle-switch-disabled'
                : 'toggle-switch-switch'
            }
            tabIndex={-1}
          />
        </label>
      </div>
    </div>
  );
};

export const RPCToggleSwitch = memo<RPCToggleSwitchProps>(
  ToggleSwitchComponent,
);
