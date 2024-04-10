import React, { CSSProperties } from 'react';
import { StoryFn, Meta } from '@storybook/react';

// components
import { RPCButton } from '@/components/RPCButton/RPCButton';
import { RPCLoadingIndicator } from '@/components/RPCLoadingIndicator/RPCLoadingIndicator';
import { IconRemove } from '@/components/icons/basic-icons/IconRemove';
import { IconPlusCircle } from '@/components/icons/basic-icons/IconPlusCircle';

// common
import { COMPONENT_VARIANTS } from '../common/enum';

// util
import { isDarkBg } from '../common/utils/color-util';

export default {
  title: 'RPCButton',
  component: RPCButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      options: COMPONENT_VARIANTS,
      control: { type: 'select' },
    },
    size: { options: ['sm', 'lg'], control: { type: 'select' } },
  },
} as Meta<typeof RPCButton>;

const btnStyle: CSSProperties = { marginRight: '.5rem' };

const Template: StoryFn<typeof RPCButton> = args => (
  <>
    <RPCButton {...args} style={btnStyle} />
    <RPCButton {...args} badgeLabel="NEW" style={btnStyle} />
    <RPCButton
      {...args}
      iconPosition="left"
      icon={<IconRemove fill="#fff" width={12} height={12} />}
      style={btnStyle}
    />
    <RPCButton
      {...args}
      iconPosition="right"
      icon={<IconPlusCircle fill="#fff" />}
    />
  </>
);

const AllVariantsTemplate: StoryFn<typeof RPCButton> = args => (
  <>
    {COMPONENT_VARIANTS.map((variant: string) => (
      <div
        className={`mb-3 p-3 ${isDarkBg(variant) ? 'bg-dark' : 'bg-light-grey'}`}
        key={variant}>
        <RPCButton {...args} style={btnStyle} variant={variant} />
        <RPCButton
          {...args}
          badgeLabel="NEW"
          style={btnStyle}
          variant={variant}
        />
        <RPCButton
          {...args}
          iconPosition="left"
          icon={<IconRemove fill="#fff" width={12} height={12} />}
          style={btnStyle}
          variant={variant}
        />
        <RPCButton
          {...args}
          iconPosition="right"
          icon={<IconPlusCircle fill="#fff" />}
          variant={variant}
        />
      </div>
    ))}
  </>
);

const LoadingTemplate: StoryFn<typeof RPCButton> = args => (
  <>
    <RPCButton {...args} />
  </>
);

export const DefaultUsage = Template.bind({});
DefaultUsage.args = {
  active: false,
  variant: 'primary',
  label: 'Label',
  size: 'sm',
};

export const AllVariants = AllVariantsTemplate.bind({});
AllVariants.args = {
  active: false,
  label: 'Label',
  size: 'sm',
};

export const WithLoadingIndicator = LoadingTemplate.bind({});
WithLoadingIndicator.args = {
  circular: true,
  variant: 'primary',
  icon: <RPCLoadingIndicator />,
};
