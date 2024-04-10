import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { RPCAlert } from '@/components/RPCAlert/RPCAlert';
import { COMPONENT_VARIANTS } from '../common/enum';
import { IconRemove } from '@/components/icons/basic-icons/IconRemove';

export default {
  title: 'RPCAlert',
  component: RPCAlert,
  variant: {
    options: COMPONENT_VARIANTS,
    control: { type: 'select' },
  },
} as Meta<typeof RPCAlert>;

const Template: StoryFn<typeof RPCAlert> = args => <RPCAlert {...args} />;

const AllVariantsTemplate: StoryFn<typeof RPCAlert> = args => (
  <>
    {COMPONENT_VARIANTS.map((variant: string) => (
      <RPCAlert
        {...args}
        key={`rpc-alert-${variant}`}
        className="mb-3"
        variant={variant}
      />
    ))}
  </>
);

export const DefaultUsage = Template.bind({});
DefaultUsage.args = {
  children: <>This is my alert content</>,
  dismissible: true,
  icon: <IconRemove />,
  isFixed: false,
  variant: 'info',
};

export const AllVariants = AllVariantsTemplate.bind({});
AllVariants.args = {
  children: <>This is my alert content</>,
  dismissible: true,
  icon: <IconRemove />,
  isFixed: false,
  variant: 'info',
};
