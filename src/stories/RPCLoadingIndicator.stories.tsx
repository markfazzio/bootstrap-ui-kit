import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

// components
import { RPCLoadingIndicator } from '@/components/RPCLoadingIndicator/RPCLoadingIndicator';

export default {
  title: 'RPCLoadingIndicator',
  component: RPCLoadingIndicator,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof RPCLoadingIndicator>;

const Template: StoryFn<typeof RPCLoadingIndicator> = args => (
  <RPCLoadingIndicator {...args} />
);

export const DefaultUsage = Template.bind({});

DefaultUsage.args = {
  className: 'p-5',
  full: false,
};

export const WithLabel = Template.bind({});

WithLabel.args = {
  className: 'p-5',
  full: false,
  label: 'Loading Data...',
};
