import React, { memo, ReactElement } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { RPCButton } from '../RPCButton/RPCButton';
import { RPCButtonGroupProps } from './RPCButtonGroup.types';
import { OptionType } from '../../common/interfaces';

const ButtonGroupComponent = (props: RPCButtonGroupProps): ReactElement => {
  const { activeIndex, onOptionSelect, options, size, variant, vertical } =
    props;
  return (
    <ButtonGroup size={size} vertical={vertical}>
      {options && options.length ? (
        <>
          {options.map((option: OptionType, index: number) => (
            <RPCButton
              active={activeIndex ? activeIndex === index : false}
              key={`rpc-btn-group-option-${index}-${option.value}`}
              label={option.label}
              onClick={() => {
                if (onOptionSelect) onOptionSelect(option);
              }}
              variant={(option.variant && option.variant.toString()) || variant}
            />
          ))}
        </>
      ) : undefined}
    </ButtonGroup>
  );
};

export const RPCButtonGroup = memo<RPCButtonGroupProps>(ButtonGroupComponent);
