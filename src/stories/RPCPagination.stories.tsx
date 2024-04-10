import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

// components
import { RPCPagination } from '@/components/RPCPagination/RPCPagination';

import { COMPONENT_VARIANTS } from '../common/enum';

export default {
  title: 'RPCPagination',
  component: RPCPagination,
  argTypes: {
    variant: {
      options: COMPONENT_VARIANTS,
      control: { type: 'select' },
    },
  },
} as Meta<typeof RPCPagination>;

const Template: StoryFn<typeof RPCPagination> = args => {
  return <RPCPagination {...args} />;
};

const commonProps = {
  onNextClick: () => console.log('clicked next'),
  onPageClick: (pageNumber: number) =>
    console.log(`Clicked page ${pageNumber}`),
  onPreviousClick: () => console.log('clicked prev'),
  pageCount: 5,
};

export const DefaultUsage = Template.bind({});

DefaultUsage.args = {
  ...commonProps,
};

export const WithActivePage = Template.bind({});

WithActivePage.args = {
  ...commonProps,
  activePage: 2,
};

export const WithPrevNextDisabled = Template.bind({});

WithPrevNextDisabled.args = {
  ...commonProps,
  isNextDisabled: true,
  isPreviousDisabled: true,
};

export const WithFirstLast = Template.bind({});

WithFirstLast.args = {
  ...commonProps,
  onFirstClick: () => console.log('first page clicked'),
  onLastClick: () => console.log('last page clicked'),
};

export const WithDarkVariant = Template.bind({});

WithDarkVariant.args = {
  ...commonProps,
  activePage: 2,
  variant: 'dark',
};

export const WithLotsOfPages = Template.bind({});

WithLotsOfPages.args = {
  ...commonProps,
  pageCount: 50,
  variant: 'dark',
};
