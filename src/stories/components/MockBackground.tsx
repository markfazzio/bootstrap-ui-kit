import React, { memo, ReactElement, ReactNode } from 'react';

// scss
import './MockBackground.scss';

interface MockBackgroundProps {
  children: ReactNode;
}

const MockBackgroundComponent = (props: MockBackgroundProps): ReactElement => {
  const { children } = props;
  return <div className="mock-bg">{children}</div>;
};

export const MockBackground = memo<MockBackgroundProps>(
  MockBackgroundComponent,
);
