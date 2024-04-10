import React, { memo, ReactElement } from 'react';
import { DEFAULT_ICON_SIZE } from '../../../common/enum';
import { BaseIconProps } from '../../../common/interfaces';

const IconCaretUpComponent = (props: BaseIconProps): ReactElement => {
  const {
    fill = '#000000',
    width = DEFAULT_ICON_SIZE,
    height = DEFAULT_ICON_SIZE,
  } = props;
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24">
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m8 14 4-4 4 4"
        fill="none"
      />
    </svg>
  );
};

export const IconCaretUp = memo(IconCaretUpComponent);
