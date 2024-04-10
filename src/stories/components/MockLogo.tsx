import React, { memo } from 'react';

// scss
import './MockLogo.scss';

const MockLogoComponent = () => {
  return <div className="mock-logo"></div>;
};

export const MockLogo = memo(MockLogoComponent);
