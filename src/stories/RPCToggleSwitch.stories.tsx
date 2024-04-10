import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

// components
import { RPCToggleSwitch } from '@/components/RPCToggleSwitch/RPCToggleSwitch';

// constants
import { COMPONENT_VARIANTS } from '../common/enum';

export default {
  title: 'form-controls/RPCToggleSwitch',
  component: RPCToggleSwitch,
  argTypes: {
    variant: {
      options: COMPONENT_VARIANTS,
      control: { type: 'select' },
    },
  },
} as Meta<typeof RPCToggleSwitch>;

const Template: StoryFn<typeof RPCToggleSwitch> = args => (
  <RPCToggleSwitch {...args} />
);

const VariantsTemplate: StoryFn<typeof RPCToggleSwitch> = args => (
  <div>
    {COMPONENT_VARIANTS.map((variant: string) => (
      <div className="mb-3" key={variant}>
        <RPCToggleSwitch {...args} variant={variant} id={variant} />
      </div>
    ))}
  </div>
);

export const DefaultUsage = Template.bind({});
DefaultUsage.args = {
  label: 'Yes or No',
};

export const AllVariants = VariantsTemplate.bind({});
AllVariants.args = {
  label: 'Yes or No',
};
