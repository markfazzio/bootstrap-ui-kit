import React, { ReactElement, memo } from 'react';
import { Container, Offcanvas } from 'react-bootstrap';
import classNames from 'classnames';

// types
import { RPCOffCanvasProps } from './RPCOffCanvas.types';

const RPCOffCanvasComponent = (props: RPCOffCanvasProps): ReactElement => {
  const {
    actionsChildren,
    backdrop,
    children,
    className,
    closeButton,
    fluidContent,
    fluidHeader,
    onHide,
    onShow,
    placement,
    scroll,
    show,
    title,
    variant,
  } = props;

  const offCanvasClassNames = classNames({
    [`offcanvas--${variant}`]: variant,
    [`${className}`]: className,
  });

  return (
    <Offcanvas
      backdrop={backdrop}
      className={offCanvasClassNames}
      show={show}
      onHide={onHide}
      placement={placement}
      onShow={onShow}
      scroll={scroll}
    >
      <Offcanvas.Header closeButton={closeButton}>
        <Container fluid={fluidHeader}>
          {title && <Offcanvas.Title as="h4">{title}</Offcanvas.Title>}
        </Container>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {!fluidContent ? <Container>{children}</Container> : <>{children}</>}
      </Offcanvas.Body>
      {actionsChildren && (
        <div className="offcanvas-actions">{actionsChildren}</div>
      )}
    </Offcanvas>
  );
};

export const RPCOffCanvas = memo<RPCOffCanvasProps>(RPCOffCanvasComponent);
