import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

// components
import { RPCAccordion } from '@/components/RPCAccordion/RPCAccordion';
import { RPCAccordionItem } from '@/components/RPCAccordion/RPCAccordionItem/RPCAccordionItem';
import { MockBackground } from './components/MockBackground';

// common
import { COMPONENT_VARIANTS } from '../common/enum';

export default {
  title: 'RPCAccordion',
  component: RPCAccordion,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    variant: {
      options: COMPONENT_VARIANTS,
      control: { type: 'select' },
    },
    size: { options: ['sm', 'lg'], control: { type: 'select' } },
  },
} as Meta<typeof RPCAccordion>;

const Template: StoryFn<any> = args => (
  <MockBackground>
    <RPCAccordion {...args}>
      <RPCAccordionItem
        eventKey="section_one"
        header="My Header"
        bodyBgVariant={args.bodyBgVariant}
        bodyTextVariant={args.bodyTextVariant}
        headerBgVariant={args.headerBgVariant}
        headerTextVariant={args.headerTextVariant}>
        This is my content 1
      </RPCAccordionItem>
      <RPCAccordionItem
        eventKey="section_two"
        header="My Header"
        bodyBgVariant={args.bodyBgVariant}
        bodyTextVariant={args.bodyTextVariant}
        headerBgVariant={args.headerBgVariant}
        headerTextVariant={args.headerTextVariant}>
        This is my content 2
      </RPCAccordionItem>
      <RPCAccordionItem
        eventKey="section_three"
        header="My Header"
        bodyBgVariant={args.bodyBgVariant}
        bodyTextVariant={args.bodyTextVariant}
        headerBgVariant={args.headerBgVariant}
        headerTextVariant={args.headerTextVariant}>
        This is my content 3
      </RPCAccordionItem>
    </RPCAccordion>
  </MockBackground>
);

export const DefaultUsage = Template.bind({});
DefaultUsage.args = {
  defaultActiveKey: ['section_one'],
  flush: true,
};

export const DarkMode = Template.bind({});
DarkMode.args = {
  defaultActiveKey: ['section_one', 'section_two'],
  flush: true,
  bodyBgVariant: 'dark',
  bodyTextVariant: 'light',
  headerBgVariant: 'dark',
  headerTextVariant: 'light',
};

export const ManualControl = Template.bind({});
ManualControl.args = {
  activeKey: ['section_one'],
  flush: true,
};
