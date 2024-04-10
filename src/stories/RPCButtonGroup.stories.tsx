import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { RPCButtonGroup } from '@/components/RPCButtonGroup/RPCButtonGroup';
import { OptionType } from '../common/interfaces';

const variantTypes: Array<string> = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
];

const buttonGroupOptions: Array<OptionType> = [
  {
    label: 'First',
    value: 'first',
  },
  {
    label: 'Second',
    value: 'second',
  },
  {
    label: 'Third',
    value: 'third',
  },
];

const defaultArgs = {
  onOptionSelect: (option: OptionType) =>
    console.log('Selected option: ', option),
  options: buttonGroupOptions,
};

export default {
  title: 'RPCButtonGroup',
  component: RPCButtonGroup,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      options: variantTypes,
      control: { type: 'select' },
    },
    size: { options: ['sm', 'md', 'lg'], control: { type: 'select' } },
  },
} as Meta<typeof RPCButtonGroup>;

const Template: StoryFn<typeof RPCButtonGroup> = args => (
  <RPCButtonGroup {...args} />
);

export const DefaultUsage = Template.bind({});
DefaultUsage.args = {
  ...defaultArgs,
};

export const WithActiveIndex = Template.bind({});
WithActiveIndex.args = {
  ...defaultArgs,
  activeIndex: 1,
};
