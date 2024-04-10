import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';

// components
import { RPCOffCanvas } from '@/components/RPCOffCanvas/RPCOffCanvas';
import { RPCButton } from '@/components/RPCButton/RPCButton';
import { MockBackground } from './components/MockBackground';

export default {
  title: 'RPCOffCanvas',
  component: RPCOffCanvas,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    variant: {
      options: ['light', 'dark'],
      control: { type: 'select' },
    },
  },
} as Meta<typeof RPCOffCanvas>;

const Template: StoryFn<typeof RPCOffCanvas> = args => {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <MockBackground>
      <RPCButton onClick={() => setIsShowing(!isShowing)}>
        {isShowing ? 'Hide' : 'Show'}
      </RPCButton>
      <RPCOffCanvas
        {...args}
        show={isShowing}
        onHide={() => setIsShowing(false)}
      />
    </MockBackground>
  );
};

export const DefaultUsage = Template.bind({});
DefaultUsage.args = {
  variant: 'light',
  placement: 'bottom',
  title: 'This website uses cookies',
  children: (
    <>
      <p>
        We use cookies to personalise content and ads, to provide social media
        features and to analyse our traffic. We also share information about
        your use of our site with our social media, advertising and analytics
        partners who may combine it with other information that you’ve provided
        to them or that they’ve collected from your use of their services.
      </p>
    </>
  ),
  actionsChildren: (
    <>
      <RPCButton variant="info" label="Accept" />
      <RPCButton variant="secondary" label="Deny" />
    </>
  ),
};
