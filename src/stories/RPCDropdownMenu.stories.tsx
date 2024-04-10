import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { DefaultOptionType } from 'rc-select/lib/Select';

// components
import { RPCDropdownMenu } from '@/components/RPCDropdownMenu/RPCDropdownMenu';

// common
import { COMPONENT_VARIANTS } from '../common/enum';

export default {
  title: 'form-controls/RPCDropdownMenu',
  component: RPCDropdownMenu,
  argTypes: {
    variant: {
      options: COMPONENT_VARIANTS,
      control: { type: 'select' },
    },
  },
} as Meta<typeof RPCDropdownMenu>;

const Template: StoryFn<typeof RPCDropdownMenu> = args => (
  <RPCDropdownMenu {...args} />
);

const AllVariantsTemplate: StoryFn<typeof RPCDropdownMenu> = args => (
  <>
    {COMPONENT_VARIANTS.map((variant: string) => (
      <div className="mb-3" key={`rpc-dropdown-${variant}`}>
        <RPCDropdownMenu {...args} variant={variant} />
      </div>
    ))}
  </>
);

export const DefaultUsage = Template.bind({});
DefaultUsage.args = {
  active: false,
  allowClear: true,
  label: 'Trainers',
  placeholder: 'Select A Trainer',
  onChange: (
    selectedOptionValue: string,
    selectedOptionObject: DefaultOptionType,
  ) => {
    console.log('Value String:', selectedOptionValue);
    console.log('Value Object:', selectedOptionObject);
  },
  options: [{ label: 'Option 1', value: 'option_1' }],
  renderOption: (option: DefaultOptionType) => {
    return (
      <div className="d-flex align-items-center">
        <div className="option-image me-3">
          <img src={option.image} />
        </div>
        <div className="option-label">{option.label}</div>
      </div>
    );
  },
};

export const AllVariants = AllVariantsTemplate.bind({});
AllVariants.args = {
  label: 'Trainers',
  placeholder: 'Select Trainer',
};

export const WithMulti = Template.bind({});
WithMulti.args = {
  closeMenuOnSelect: false,
  label: 'Trainers',
  placeholder: 'Select Multiple Trainers',
  isMulti: true,
};

export const WithVariantAndMulti = Template.bind({});
WithVariantAndMulti.args = {
  closeMenuOnSelect: false,
  label: 'Trainers',
  placeholder: 'Select Multiple Trainers',
  isMulti: true,
  variant: 'dark',
};

export const WithDefaultShow = Template.bind({});
WithDefaultShow.args = {
  closeMenuOnSelect: false,
  defaultMenuIsOpen: true,
  label: 'Trainers',
  placeholder: 'Select Trainer',
  variant: 'dark',
};
