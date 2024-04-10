import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

// components
import { RPCCheckbox } from '@/components/RPCCheckbox/RPCCheckbox';

// constants
// import { COMPONENT_VARIANTS } from '../common/enum';

export default {
  title: 'form-controls/RPCCheckbox',
  component: RPCCheckbox,
  // argTypes: {
  //   variant: {
  //     options: COMPONENT_VARIANTS,
  //     control: { type: 'select' },
  //   },
  // },
} as Meta<typeof RPCCheckbox>;

const Template: StoryFn<typeof RPCCheckbox> = args => (
  <>
    <RPCCheckbox {...args} label="Item One" id="cb1" />
    <RPCCheckbox {...args} label="Item Two" id="cb2" />
    <RPCCheckbox {...args} label="Item Three" id="cb3" />
    <RPCCheckbox {...args} label="Item Four" id="cb4" />
  </>
);

// const VariantsTemplate: StoryFn<typeof RPCCheckbox> = args => (
//   <div>
//     {COMPONENT_VARIANTS.map((variant: string) => (
//       <div className="mb-3" key={variant}>
//         <RPCCheckbox {...args} variant={variant} />
//       </div>
//     ))}
//   </div>
// );

export const DefaultUsage = Template.bind({});

// export const AllVariants = VariantsTemplate.bind({});
// AllVariants.args = {
//   label: 'Energy Costs',
//   isMulti: true,
//   nullable: true,
// };
