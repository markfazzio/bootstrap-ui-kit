import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { RPCBreadcrumbs } from '@/components/RPCBreadcrumbs/RPCBreadcrumbs';
import { BreadcrumbItemProps } from 'react-bootstrap';

export default {
  title: 'RPCBreadcrumbs',
  component: RPCBreadcrumbs,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'info', 'dark', 'light'],
      control: { type: 'select' },
    },
  },
} as Meta<typeof RPCBreadcrumbs>;

const breadcrumbsItems: Array<BreadcrumbItemProps> = [
  {
    href: '#',
    title: 'Shop',
    target: '_blank',
    onClick: () => console.log('shop clicked'),
  },
  {
    href: '#',
    title: 'Vintage Cards',
    target: '_blank',
    onClick: () => console.log('vintage cards clicked'),
  },
  {
    active: true,
    href: '#',
    title: 'Jungle Set',
    target: '_blank',
    onClick: () => console.log('jungle clicked'),
  },
];

const Template: StoryFn<typeof RPCBreadcrumbs> = args => (
  <RPCBreadcrumbs {...args} />
);

export const DefaultUsage = Template.bind({});
DefaultUsage.args = {
  items: breadcrumbsItems,
};

export const AsButtons = Template.bind({});
AsButtons.args = {
  asButtons: true,
  items: breadcrumbsItems,
};
