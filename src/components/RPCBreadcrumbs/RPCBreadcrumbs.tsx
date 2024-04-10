import React, { memo, ReactElement } from 'react';
import { Breadcrumb, BreadcrumbItemProps } from 'react-bootstrap';
import classNames from 'classnames';

// types
import { RPCBreadcrumbsProps } from './RPCBreadcrumbs.types';

const RPCBreadcrumbsComponent = (props: RPCBreadcrumbsProps): ReactElement => {
  const { activeItem, asButtons, items, variant = 'dark' } = props;

  const breadcrumbsClassNames = classNames({
    'rpc-breadcrumbs': true,
    [`bg-${variant}`]: variant,
  });

  return (
    <Breadcrumb className={breadcrumbsClassNames}>
      {items && items.length
        ? items.map((item: BreadcrumbItemProps, index: number) => (
            <Breadcrumb.Item
              key={`breadcrumb-item-${index}-${item.title}`}
              active={item.active || (activeItem && activeItem === item.href)}
              href={item.href}
              linkAs={asButtons ? 'button' : item.linkAs}
              linkProps={item.linkProps}
              target={item.target}
              onClick={item.onClick}
            >
              {item.title}
            </Breadcrumb.Item>
          ))
        : undefined}
    </Breadcrumb>
  );
};

export const RPCBreadcrumbs = memo<RPCBreadcrumbsProps>(
  RPCBreadcrumbsComponent,
);
