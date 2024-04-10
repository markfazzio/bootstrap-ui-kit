import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { RPCCarousel } from '@/components/RPCCarousel/RPCCarousel';

export default {
  title: 'RPCCarousel',
  component: RPCCarousel,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof RPCCarousel>;

const CarouselCaption = (props: { caption: string }) => {
  return (
    <div className="container">
      <h2>{props.caption}</h2>
    </div>
  );
};

const Template: StoryFn<typeof RPCCarousel> = args => <RPCCarousel {...args} />;

export const DefaultUsage = Template.bind({});
DefaultUsage.args = {
  items: [
    {
      caption: <CarouselCaption caption="Check Us Out on WhatNot" />,
      imageUrl:
        'https://poketcgshop.s3.amazonaws.com/featured-carousel/featured-carousel-bg-1.jpg',
    },
    {
      caption: <CarouselCaption caption="Create a Custom Card!" />,
      imageUrl:
        'https://poketcgshop.s3.amazonaws.com/featured-carousel/featured-carousel-bg-2.jpg',
    },
  ],
  fade: true,
  fixed: false,
  fullscreen: false,
};
