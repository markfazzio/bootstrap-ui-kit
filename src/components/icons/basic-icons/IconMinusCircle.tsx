import React, { memo, ReactElement } from 'react';
import { BaseIconProps } from '../../../common/interfaces';
import { SMALL_ICON_SIZE } from '../../../common/enum';

const IconMinusCircleComponent = (props: BaseIconProps): ReactElement => {
  const {
    fill = '#000000',
    width = SMALL_ICON_SIZE,
    height = SMALL_ICON_SIZE,
  } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32">
      <path
        fill={fill}
        fillRule="evenodd"
        d="M22 17H10a1.001 1.001 0 0 1 0-2h12a1.001 1.001 0 0 1 0 2ZM16 0C7.163 0 0 7.16 0 16s7.163 16 16 16 16-7.16 16-16S24.837 0 16 0Z"
      />
    </svg>
  );
};

export const IconMinusCircle = memo(IconMinusCircleComponent);
