import classNames from 'classnames';
import React, { memo, ReactElement } from 'react';

// types
import { LoadingIndicatorProps } from './RPCLoadingIndicator.types';
import { IconLoading } from '../icons/basic-icons/IconLoading';

const RPCLoadingIndicatorComponent = (
  props: LoadingIndicatorProps,
): ReactElement => {
  const { className, label, full, icon = <IconLoading /> } = props;

  const loadingIndicatorClassNames = classNames({
    'loading-indicator': true,
    'loading-indicator--full': full,
    [`${className}`]: className,
  });

  return (
    <div className={loadingIndicatorClassNames}>
      <div className="loading-indicator__content">
        <div className="loading-indicator__icon d-flex align-items-center justify-content-center">
          {icon}
        </div>
        {label ? (
          <div className="loading-indicator__text d-flex align-items-center justify-content-center">
            {label}
          </div>
        ) : undefined}
      </div>
    </div>
  );
};

export const RPCLoadingIndicator = memo<LoadingIndicatorProps>(
  RPCLoadingIndicatorComponent,
);
