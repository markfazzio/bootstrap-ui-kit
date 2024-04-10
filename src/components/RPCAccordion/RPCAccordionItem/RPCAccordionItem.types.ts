import { ReactNode } from 'react';
import { AccordionItemProps } from 'react-bootstrap/esm/AccordionItem';
import { Variant } from 'react-bootstrap/esm/types';

export interface RPCAccordionItemProps extends AccordionItemProps {
  bodyBgVariant?: Variant;
  bodyTextVariant?: Variant;
  disabled?: boolean;
  header?: string | ReactNode;
  headerTextVariant?: Variant;
  headerBgVariant?: Variant;
  subheader?: string | ReactNode;
}
