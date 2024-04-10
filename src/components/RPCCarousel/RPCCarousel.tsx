import React, { memo, ReactElement } from 'react';
import { Carousel } from 'react-bootstrap';
import classNames from 'classnames';

import { RPCCarouselItemType, RPCCarouselProps } from './RPCCarousel.types';

const RPCCarouselComponent = (props: RPCCarouselProps): ReactElement => {
  const {
    className,
    fade = true,
    fixed,
    fullscreen,
    indicators,
    interval,
    items,
    opacity,
    pause,
    variant,
  } = props;

  const carouselClassNames = classNames({
    'rpc-carousel': true,
    'rpc-carousel--fixed': fixed,
    'rpc-carousel--full': fullscreen,
    [`opacity-${opacity}`]: opacity,
    [`${className}`]: className,
  });

  return (
    <Carousel
      className={carouselClassNames}
      controls={false}
      indicators={indicators}
      interval={interval}
      fade={fade}
      pause={pause}
      variant={variant}
    >
      {items && items.length
        ? items.map(
            (item: RPCCarouselItemType, index: number): ReactElement => (
              <Carousel.Item
                key={`featured_carousel_slide_${index}`}
                style={{
                  backgroundImage: `url("${item.imageUrl}")`,
                }}
              >
                {item.caption ? (
                  <Carousel.Caption className="d-flex align-items-center p-0">
                    {item.caption}
                  </Carousel.Caption>
                ) : undefined}
              </Carousel.Item>
            ),
          )
        : undefined}
    </Carousel>
  );
};

export const RPCCarousel = memo<RPCCarouselProps>(RPCCarouselComponent);
