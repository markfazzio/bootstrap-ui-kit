import { PaginationProps } from 'react-bootstrap';
import { Variant } from 'react-bootstrap/esm/types';

export interface RPCPaginationProps extends PaginationProps {
  activePage?: number;
  ellipsisThreshold?: number;
  isNextDisabled?: boolean;
  isPreviousDisabled?: boolean;
  onEllipsisClick?: () => void;
  onFirstClick?: () => void;
  onLastClick?: () => void;
  onNextClick?: () => void;
  onPageClick?: (pageNumber: number) => void;
  onPreviousClick?: () => void;
  pageCount: number;
  variant?: Variant;
}
