import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

// components
import { RPCTooltip } from '@/components/RPCTooltip/RPCTooltip';
import { RPCButton } from '@/components/RPCButton/RPCButton';

export default {
  title: 'RPCTooltip',
  component: RPCTooltip,
} as Meta<typeof RPCTooltip>;

const Template: StoryFn<typeof RPCTooltip> = args => {
  return <RPCTooltip {...args} />;
};

export const DefaultUsage = Template.bind({});
DefaultUsage.args = {
  children: <>Tooltip content</>,
  tooltipPopper: (
    <RPCButton onClick={() => console.log('clicked')}>Open Tooltip</RPCButton>
  ),
  trigger: 'hover',
};

export const OnClick = Template.bind({});
OnClick.args = {
  children: <>Tooltip content</>,
  tooltipPopper: (
    <RPCButton onClick={() => console.log('clicked')}>Open Tooltip</RPCButton>
  ),
  trigger: 'click',
};
