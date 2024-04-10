import { ReactNode } from 'react';
import { CarouselProps } from 'react-bootstrap';
import { OpacityType } from '../../common/prop-types';

export type RPCCarouselItemType = {
  imageUrl?: string;
  caption?: ReactNode;
};

export interface RPCCarouselProps extends CarouselProps {
  fixed?: boolean;
  fullscreen?: boolean;
  items: Array<RPCCarouselItemType>;
  opacity?: OpacityType;
}
