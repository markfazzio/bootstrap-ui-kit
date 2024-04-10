import React, { ReactNode } from 'react';

// icons demo data array
import { ICONS_DEMO_DATA, IconsDemoDataSection } from './data/icons-demo';

export default {
  title: 'Icons',
  parameters: {
    layout: 'centered',
  },
};

const Template = () => (
  <>
    {ICONS_DEMO_DATA.map((section: IconsDemoDataSection) => (
      <section className="bg-light p-5 mb-5" key={section.sectionName}>
        <div className="container">
          <h5 className="mb-4 text-primary">{section.sectionName}</h5>

          <div className="row">
            {section.icons.map(
              (iconItem: { label: string; icon: ReactNode }): ReactNode => (
                <div
                  className="col-md-2 text-center mb-3"
                  key={`${iconItem.label}-${section.sectionName}`}>
                  <div className="mb-3">{iconItem.icon}</div>
                  <div>
                    <small>{iconItem.label}</small>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>
    ))}
  </>
);

export const IconLibrary = Template.bind({});
IconLibrary.args = {};
