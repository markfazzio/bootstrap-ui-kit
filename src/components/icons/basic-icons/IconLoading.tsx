import React, { memo, ReactElement } from 'react';
import { SMALL_ICON_SIZE } from '../../../common/enum';
import { BaseIconProps } from '../../../common/interfaces';

const IconLoadingComponent = (props: BaseIconProps): ReactElement => {
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
        strokeLinecap="round"
        strokeWidth="3.556"
        d="M20 12a8 8 0 0 1-11.76 7.061"
      />
    </svg>
  );
};

export const IconLoading = memo<BaseIconProps>(IconLoadingComponent);
