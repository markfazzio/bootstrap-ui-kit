import React, { memo, ReactElement } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import classNames from 'classnames';

// types
import { RPCAccordionItemProps } from './RPCAccordionItem.types';

// components
import { IconPlusCircle } from '../../icons/basic-icons/IconPlusCircle';
import { IconMinusCircle } from '../../icons/basic-icons/IconMinusCircle';

const RPCAccordionItemComponent = (
  props: RPCAccordionItemProps,
): ReactElement => {
  const {
    children,
    className,
    bodyBgVariant,
    bodyTextVariant,
    headerBgVariant,
    headerTextVariant,
    eventKey,
    header,
    id,
    subheader,
  } = props;

  const accordionItemClassNames = classNames({
    [`bg-${headerBgVariant || 'light'}`]: true,
    [`${className}`]: className,
  });

  const accordionItemHeaderClassNames = classNames({
    [`text-${headerTextVariant || 'dark'}`]: headerTextVariant,
  });

  const accordionItemBodyClassNames = classNames({
    [`bg-${bodyBgVariant || 'light'}`]: true,
    [`text-${bodyTextVariant || 'dark'}`]: true,
  });

  return (
    <Accordion.Item
      eventKey={eventKey}
      className={accordionItemClassNames}
      id={id}>
      <Accordion.Header>
        <div className="d-flex align-items-center w-100">
          <div>
            <div className={accordionItemHeaderClassNames}>{header}</div>
            {subheader ? (
              <div className="accordion-item__subheader my-1">{subheader}</div>
            ) : undefined}
          </div>
          <div className="ms-auto">
            <span className="expand-icon">
              <IconPlusCircle width={24} height={24} />
            </span>
            <span className="collapse-icon">
              <IconMinusCircle width={24} height={24} />
            </span>
          </div>
        </div>
      </Accordion.Header>
      <Accordion.Body className={accordionItemBodyClassNames}>
        {children}
      </Accordion.Body>
    </Accordion.Item>
  );
};

export const RPCAccordionItem = memo<RPCAccordionItemProps>(
  RPCAccordionItemComponent,
);
