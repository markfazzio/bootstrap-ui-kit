import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

// components
import { RPCTable } from '@/components/RPCTable/RPCTable';

// common
import { COMPONENT_VARIANTS } from '../common/enum';

export default {
  title: 'RPCTable',
  component: RPCTable,
  argTypes: {
    variant: {
      options: COMPONENT_VARIANTS,
      control: { type: 'select' },
    },
  },
} as Meta<typeof RPCTable>;

const Template: StoryFn<typeof RPCTable> = args => {
  return (
    <RPCTable {...args}>
      <thead>
        <tr>
          <th>Pokemon Name</th>
          <th>Pokemon Type</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Charizard</td>
          <td>Fire</td>
        </tr>
        <tr>
          <td>Blastoise</td>
          <td>Water</td>
        </tr>
        <tr>
          <td>Venusaur</td>
          <td>Grass</td>
        </tr>
      </tbody>
    </RPCTable>
  );
};

export const DefaultUsage = Template.bind({});
DefaultUsage.args = {
  bordered: false,
  borderless: false,
  className: '',
  hover: true,
  responsive: true,
  size: '',
  striped: true,
  variant: 'dark',
};
