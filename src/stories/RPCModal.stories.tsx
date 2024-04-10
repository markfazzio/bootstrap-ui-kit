import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';

// components
import { RPCButton } from '@/components/RPCButton/RPCButton';
import { RPCModal } from '@/components/RPCModal/RPCModal';

// common
import { COMPONENT_VARIANTS } from '../common/enum';

export default {
  title: 'RPCModal',
  component: RPCModal,
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
} as Meta<typeof RPCModal>;

const Template: StoryFn<typeof RPCModal> = args => {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <>
      <RPCButton
        label="Open RPCModal"
        onClick={() => setIsShowing(!isShowing)}
      />
      <RPCModal
        {...args}
        dismissible
        footer={
          <>
            <RPCButton label="OK" variant="primary" />
            <RPCButton label="Cancel" variant="secondary" />
          </>
        }
        onHide={() => setIsShowing(false)}
        show={isShowing}
        title="RPCModal Title">
        Lorem ipsum dolor sit amet.
      </RPCModal>
    </>
  );
};

export const DefaultUsage = Template.bind({});
DefaultUsage.args = {
  size: 'sm',
};
