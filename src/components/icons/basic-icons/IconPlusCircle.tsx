import React, { memo, ReactElement } from 'react';
import { SMALL_ICON_SIZE } from '../../../common/enum';
import { BaseIconProps } from '../../../common/interfaces';

const IconPlusCircleComponent = (props: BaseIconProps): ReactElement => {
  const {
    fill = '#000000',
    width = SMALL_ICON_SIZE,
    height = SMALL_ICON_SIZE,
    style,
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      style={style}
      viewBox="0 0 512 512">
      <path
        fill={fill}
        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"
      />
    </svg>
  );
};

export const IconPlusCircle = memo<BaseIconProps>(IconPlusCircleComponent);
