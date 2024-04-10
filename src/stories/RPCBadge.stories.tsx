import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { RPCBadge } from '@/components/RPCBadge/RPCBadge';

const DefaultOptionTypes = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
];

export default {
  title: 'RPCBadge',
  component: RPCBadge,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    bg: {
      options: DefaultOptionTypes,
      control: { type: 'select' },
    },
    text: {
      options: DefaultOptionTypes,
      control: { type: 'select' },
    },
    size: { options: ['sm', 'lg'], control: { type: 'select' } },
  },
} as Meta<typeof RPCBadge>;

const Template: StoryFn<typeof RPCBadge> = args => <RPCBadge {...args} />;

export const DefaultUsage = Template.bind({});
DefaultUsage.args = {
  bg: 'primary',
  children: 'Label',
  text: '',
};
