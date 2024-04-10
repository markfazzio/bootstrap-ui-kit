import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

// components
import { RPCTextInput } from '@/components/RPCTextInput/RPCTextInput';

// constants
import { COMPONENT_VARIANTS } from '../common/enum';

export default {
  title: 'form-controls/RPCTextInput',
  component: RPCTextInput,
  argTypes: {
    variant: {
      options: COMPONENT_VARIANTS,
      control: { type: 'select' },
    },
  },
} as Meta<typeof RPCTextInput>;

const Template: StoryFn<typeof RPCTextInput> = args => (
  <RPCTextInput {...args} />
);

const VariantsTemplate: StoryFn<typeof RPCTextInput> = args => (
  <div>
    {COMPONENT_VARIANTS.map((variant: string) => (
      <div className="mb-3" key={variant}>
        <RPCTextInput {...args} variant={variant} />
      </div>
    ))}
  </div>
);

export const DefaultUsage = Template.bind({});
DefaultUsage.args = {
  label: 'Trainers',
  placeholder: 'Select A Trainer',
};

export const AllVariants = VariantsTemplate.bind({});
AllVariants.args = {
  label: 'Trainers',
  placeholder: 'Select A Trainer',
};
