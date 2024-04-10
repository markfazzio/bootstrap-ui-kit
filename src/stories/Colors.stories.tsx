import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Variant } from 'react-bootstrap/esm/types';

import { COMPONENT_VARIANTS } from '../common/enum';
import { isDarkBg, isLightText } from '../common/utils/color-util';

export default {
  title: 'Colors',
  parameters: {
    layout: 'centered',
  },
} as Meta;

const testString =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum eu urna vel pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam vitae neque lacus. Fusce elementum finibus euismod. Ut consectetur enim quam, ac malesuada felis semper a. ';

const Template: StoryFn = () => (
  <div className="container">
    <h2>BG Colors</h2>
    <div className="row mb-5">
      {COMPONENT_VARIANTS.map((variant: Variant) => {
        return (
          <div className="col-sm-2" key={`variant-bg-${variant}`}>
            <div
              className={`mb-3 p-3 bg-${variant} ${isLightText(variant) ? 'text-light' : ''}`}>
              <strong>{`bg-${variant}`}</strong>
            </div>
          </div>
        );
      })}
    </div>
    <h2>Text Colors</h2>
    <div className="row">
      {COMPONENT_VARIANTS.map((variant: Variant) => {
        return (
          <div
            className={`col-sm-3 ${isDarkBg(variant) ? 'bg-dark' : ''}`}
            key={`variant-text-${variant}`}>
            <div className={`mb-3 p-3 text-${variant}`}>
              <strong>
                {`text-${variant}`} - {testString}
              </strong>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export const DefaultUsage = Template.bind({});
