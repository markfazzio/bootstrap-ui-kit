import classNames from 'classnames';
import React, { memo, ReactElement } from 'react';
import Pagination from 'react-bootstrap/Pagination';

// types
import { RPCPaginationProps } from './RPCPagination.types';

const RPCPaginationComponent = (props: RPCPaginationProps): ReactElement => {
  const {
    activePage = 1,
    ellipsisThreshold = 5,
    isNextDisabled,
    isPreviousDisabled,
    onEllipsisClick,
    onFirstClick,
    onLastClick,
    onNextClick,
    onPageClick,
    onPreviousClick,
    pageCount,
    size,
    variant,
  } = props;

  const paginationClassNames = classNames({
    'rpc-pagination': true,
    [`rpc-pagination--${variant}`]: variant,
  });

  let isPageNumberOutOfRange: boolean;

  const paginationItems = [...new Array(pageCount)].map(
    (_, index: number): ReactElement => {
      const pageNumber = index + 1;
      const isPageNumberFirst = pageNumber === 1;
      const isPageNumberLast = pageNumber === pageCount;
      const isCurrentPageWithinTwoPageNumbers =
        Math.abs(pageNumber - activePage) <= 2;

      const showPaginationItem =
        pageCount <= ellipsisThreshold
          ? true
          : isPageNumberFirst ||
            isPageNumberLast ||
            isCurrentPageWithinTwoPageNumbers;

      if (showPaginationItem) {
        isPageNumberOutOfRange = false;
        return (
          <Pagination.Item
            key={pageNumber}
            onClick={() => onPageClick(pageNumber)}
            active={pageNumber === activePage}
          >
            {pageNumber}
          </Pagination.Item>
        );
      }

      if (!isPageNumberOutOfRange) {
        isPageNumberOutOfRange = true;
        return (
          <Pagination.Ellipsis
            key={pageNumber}
            className="muted"
            onClick={onEllipsisClick}
          />
        );
      }

      return null;
    },
  );

  return (
    <Pagination size={size} className={paginationClassNames}>
      {onFirstClick ? <Pagination.First onClick={onFirstClick} /> : undefined}
      <Pagination.Prev
        onClick={onPreviousClick}
        disabled={isPreviousDisabled}
      />
      {paginationItems}
      <Pagination.Next onClick={onNextClick} disabled={isNextDisabled} />
      {onLastClick ? <Pagination.Last onClick={onLastClick} /> : undefined}
    </Pagination>
  );
};

export const RPCPagination = memo<RPCPaginationProps>(RPCPaginationComponent);
