import React, { memo, ReactElement } from 'react';
import { BaseIconProps } from '../../../common/interfaces';
import { SMALL_ICON_SIZE } from '../../../common/enum';

const IconMenuComponent = (props: BaseIconProps): ReactElement => {
  const {
    fill = '#000000',
    width = SMALL_ICON_SIZE,
    height = SMALL_ICON_SIZE,
  } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width={width}
      height={height}>
      <path
        stroke={fill}
        stroke-linecap="round"
        stroke-width="1.5"
        d="M20 7H4M20 12H4M20 17H4"
      />
    </svg>
  );
};

export const IconMenu = memo(IconMenuComponent);
