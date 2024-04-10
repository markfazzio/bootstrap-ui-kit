import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

// components
import { RPCRangeSliderInput } from '@/components/RPCRangeSliderInput/RPCRangeSliderInput';

// constants
import { COMPONENT_VARIANTS } from '../common/enum';

export default {
  title: 'form-controls/RPCRangeSliderInput',
  component: RPCRangeSliderInput,
  argTypes: {
    variant: {
      options: COMPONENT_VARIANTS,
      control: { type: 'select' },
    },
  },
} as Meta<typeof RPCRangeSliderInput>;

const Template: StoryFn<typeof RPCRangeSliderInput> = args => (
  <RPCRangeSliderInput {...args} />
);

const VariantsTemplate: StoryFn<typeof RPCRangeSliderInput> = args => (
  <div>
    {COMPONENT_VARIANTS.map((variant: string) => (
      <div className="mb-3" key={variant}>
        <RPCRangeSliderInput {...args} variant={variant} />
      </div>
    ))}
  </div>
);

export const DefaultUsage = Template.bind({});
DefaultUsage.args = {
  label: 'Select Percentage',
  step: 1,
  showText: true,
  type: '%',
  min: 0,
  max: 100,
};

export const AllVariants = VariantsTemplate.bind({});
AllVariants.args = {
  label: 'Select Percentage',
  step: 1,
  showText: true,
  type: '%',
  min: 0,
  max: 100,
};
