import React, { memo, ReactElement } from 'react';
import { Table, TableProps } from 'react-bootstrap';

const RPCTableComponent = (props: TableProps): ReactElement => {
  const {
    bordered,
    borderless,
    children,
    className,
    hover,
    responsive,
    size,
    striped,
    variant,
  } = props;

  return (
    <Table
      bordered={bordered}
      borderless={borderless}
      className={className}
      hover={hover}
      responsive={responsive}
      size={size}
      striped={striped}
      variant={variant}
    >
      {children}
    </Table>
  );
};

export const RPCTable = memo<TableProps>(RPCTableComponent);
