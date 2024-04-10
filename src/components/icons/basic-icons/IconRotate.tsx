import React, { memo, ReactElement } from 'react';
import { SMALL_ICON_SIZE } from '../../../common/enum';
import { BaseIconProps } from '../../../common/interfaces';

const IconRotateComponent = (props: BaseIconProps): ReactElement => {
  const {
    fill = '#000000',
    width = SMALL_ICON_SIZE,
    height = SMALL_ICON_SIZE,
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 853.33 512.25"
      width={width}
      height={height}>
      <path
        fill={fill}
        d="M426.67 0C183.47 0 0 91.73 0 213.33c0 104.54 136.11 186.88 329 208.22L311 439a42.67 42.67 0 0 0-.25 60.34l.25.25a42.66 42.66 0 0 0 60.34.24l.25-.24 85.41-85.3a44.1 44.1 0 0 0 0-60.58l-85.33-85.34A42.84 42.84 0 0 0 311 329l5.12 4.69C170.67 313.17 85.33 256 85.33 213.33c0-52.05 133.12-128 341.34-128s341.33 76 341.33 128c0 35.42-61.87 85.34-179.63 110.94a42.66 42.66 0 0 0-33.87 49.93c0 .28.11.56.17.84a42.66 42.66 0 0 0 50.58 32.89h.19c155.73-34.13 247.89-106.66 247.89-194.56C853.33 91.73 669.87 0 426.67 0Z"
      />
    </svg>
  );
};

export const IconRotate = memo<BaseIconProps>(IconRotateComponent);
