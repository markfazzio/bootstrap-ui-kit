import React, { memo, ReactElement } from 'react';
import classNames from 'classnames';
import Accordion from 'react-bootstrap/Accordion';

// types
import { RPCAccordionProps } from './RPCAccordion.types';

const RPCAccordionComponent = (props: RPCAccordionProps): ReactElement => {
  const {
    activeKey,
    alwaysOpen = true,
    className,
    children,
    defaultActiveKey,
    fluid,
    flush,
  } = props;

  const accordionClassNames = classNames({
    'rpc-accordion': true,
    'accordion--fluid': fluid,
    [`${className}`]: className,
  });

  return (
    <Accordion
      activeKey={activeKey}
      alwaysOpen={alwaysOpen}
      className={accordionClassNames}
      defaultActiveKey={defaultActiveKey}
      flush={flush}>
      {children}
    </Accordion>
  );
};

export const RPCAccordion = memo<RPCAccordionProps>(RPCAccordionComponent);
