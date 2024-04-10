import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

// components
import { RPCColorPicker } from '@/components/RPCColorPicker/RPCColorPicker';

// constants
import { COMPONENT_VARIANTS } from '../common/enum';

export default {
  title: 'form-controls/RPCColorPicker',
  component: RPCColorPicker,
  argTypes: {
    variant: {
      options: COMPONENT_VARIANTS,
      control: { type: 'select' },
    },
  },
} as Meta<typeof RPCColorPicker>;

const Template: StoryFn<typeof RPCColorPicker> = args => (
  <RPCColorPicker {...args} />
);

const VariantsTemplate: StoryFn<typeof RPCColorPicker> = args => (
  <div>
    {COMPONENT_VARIANTS.map((variant: string) => (
      <div className="mb-3" key={variant}>
        <RPCColorPicker {...args} variant={variant} />
      </div>
    ))}
  </div>
);

export const DefaultUsage = Template.bind({});
DefaultUsage.args = {
  label: 'Colors',
  placeholder: 'Select A Color',
};

export const AllVariants = VariantsTemplate.bind({});
AllVariants.args = {
  label: 'Colors',
  placeholder: 'Select A Color',
};
