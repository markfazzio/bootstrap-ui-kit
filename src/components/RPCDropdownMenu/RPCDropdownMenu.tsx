import React, { memo, ReactElement } from 'react';
import Select, { Option } from 'rc-select';
import classNames from 'classnames';
import { DefaultOptionType } from 'rc-select/lib/Select';

// types
import { RPCDropdownMenuProps } from './RPCDropdownMenu.types';

// components
import { IconRemove } from '../icons/basic-icons/IconRemove';
import { IconCaretUp } from '../icons/basic-icons/IconCaretUp';
import { isLightText } from '../../common/utils/color-util';

const RPCDropdownMenuComponent = (
  props: RPCDropdownMenuProps,
): ReactElement => {
  const {
    active,
    allowClear = true,
    autoFocus,
    className,
    disabled,
    defaultOpen,
    defaultValue,
    id,
    inline,
    label,
    mode, // 'combobox' | 'multiple' | 'tags';
    notFoundContent,
    onChange,
    onClear,
    onSearch,
    onSelect,
    open,
    options,
    placeholder = 'Select or Search',
    renderOption,
    showSearch = true,
    value,
    variant = 'white',
  } = props;

  const dropdownMenuClassNames = classNames({
    'rpc-dropdown-menu': true,
    'rpc-dropdown-menu--inline': inline,
    'rpc-dropdown-menu--disabled': disabled,
    [`bg-${variant}`]: variant && !disabled,
    [`text-light`]: variant && isLightText(variant),
    active: active,
    [`${className}`]: className,
  });

  const dropdownMenuDropdownClassNames = classNames({
    'rpc-dropdown-menu__dropdown': true,
    [`bg-${variant}`]: variant,
    [`text-light`]: variant && isLightText(variant),
  });

  return (
    <div className={dropdownMenuClassNames}>
      <div className="form-floating">
        {label && <label htmlFor={id}>{label}</label>}
        <Select
          allowClear={allowClear}
          autoFocus={autoFocus}
          clearIcon={<IconRemove fill="#cc0000" />}
          defaultOpen={defaultOpen}
          defaultValue={defaultValue}
          disabled={disabled}
          dropdownClassName={dropdownMenuDropdownClassNames}
          id={id}
          mode={mode}
          notFoundContent={notFoundContent}
          onChange={onChange}
          onClear={onClear}
          onSearch={onSearch}
          onSelect={onSelect}
          open={open}
          placeholder={placeholder}
          showSearch={showSearch}
          suffixIcon={<IconCaretUp />}
          value={value}>
          {options && options.length ? (
            <>
              {options.map((option: DefaultOptionType, index: number) => (
                <Option value={option.value} key={`option_${index}_${id}`}>
                  {renderOption ? (
                    <>{renderOption(option)}</>
                  ) : (
                    <>{option.label}</>
                  )}
                </Option>
              ))}
            </>
          ) : undefined}
        </Select>
      </div>
    </div>
  );
};

export const RPCDropdownMenu = memo<RPCDropdownMenuProps>(
  RPCDropdownMenuComponent,
);
