import React, {
  Fragment,
  memo,
  MouseEvent,
  ReactElement,
  ReactNode,
  useState,
} from 'react';
import { NavDropdown } from 'react-bootstrap';
import { RPCBadge } from '../RPCBadge/RPCBadge';
import { RPCLoadingIndicator } from '../RPCLoadingIndicator/RPCLoadingIndicator';

// types
import {
  RPCNavbarDropdownProps,
  RPCNavbarDropdownItemProps,
} from './RPCNavbarDropdown.types';

const RPCNavbarDropdownComponent = (
  props: RPCNavbarDropdownProps,
): ReactElement => {
  const {
    activeItem,
    active,
    activeChild,
    badgeContent,
    drop,
    errorContent = 'Error loading menu.',
    icon,
    id,
    isError,
    isLoading,
    items,
    label,
    loadingLabel,
    onFirstLevelChildItemClick,
    onItemClick,
    onSecondLevelChildItemClick,
    openOnHover = true,
    show,
    variant,
  } = props;

  const [parentDropdownShowingId, setParentDropdownShowingId] = useState('');
  const [childDropdownShowingId, setChildDropdownShowingId] = useState('');

  const showParentDropdown = (menuId: string) => {
    setParentDropdownShowingId(menuId);
  };

  const hideParentDropdown = () => {
    setParentDropdownShowingId('');
  };

  const showChildDropdown = (itemId: string) => {
    setChildDropdownShowingId(itemId);
  };

  const hideChildDropdown = () => {
    setChildDropdownShowingId('');
  };

  const renderItemTitle = (
    dropIcon?: ReactNode,
    dropLabel?: string | ReactNode,
    dropBadgeContent?: string,
  ): ReactNode => {
    return (
      <>
        {dropIcon ? (
          <span className="nav-item__icon pe-2">{dropIcon}</span>
        ) : undefined}
        <span className="nav-item__label pe-4">{dropLabel}</span>
        {dropBadgeContent ? (
          <span className="nav-item__badge">
            <RPCBadge bg="primary">{dropBadgeContent}</RPCBadge>
          </span>
        ) : undefined}
      </>
    );
  };

  return (
    <NavDropdown
      active={active || parentDropdownShowingId === id}
      drop={drop}
      menuVariant={variant}
      onClick={(event: MouseEvent<HTMLDivElement>) => {
        if (parentDropdownShowingId === id) {
          hideParentDropdown();
        }
        showParentDropdown(id);
        if (onItemClick) onItemClick(event);
      }}
      title={renderItemTitle(icon, label, badgeContent)}
      id={id}
      show={openOnHover ? parentDropdownShowingId === id : show}
      onMouseEnter={openOnHover ? () => showParentDropdown(id) : undefined}
      onSelect={hideParentDropdown}
      onMouseLeave={openOnHover ? () => hideParentDropdown() : undefined}>
      {isLoading ? (
        <NavDropdown.Item className="nav-item--is-loading p-4 justify-content-center">
          <RPCLoadingIndicator
            label={loadingLabel}
            fill={variant === 'dark' ? '#fff' : '#000'}
          />
        </NavDropdown.Item>
      ) : (
        <>
          {isError ? (
            <>{errorContent}</>
          ) : (
            <>
              {items && items.length ? (
                <>
                  {items.map(
                    (item: RPCNavbarDropdownItemProps, index: number) => (
                      <Fragment key={`item-${index}--${item.id}`}>
                        {item.children ? (
                          <NavDropdown
                            className="child-dropdown"
                            active={
                              activeChild === item.id ||
                              childDropdownShowingId === item.id
                            }
                            title={renderItemTitle(
                              item.icon,
                              item.label,
                              item.badgeContent,
                            )}
                            id={id}
                            show={childDropdownShowingId === item.id}
                            onClick={(event: MouseEvent<HTMLDivElement>) => {
                              if (onFirstLevelChildItemClick)
                                onFirstLevelChildItemClick(event);
                              showChildDropdown(item.id);
                            }}
                            onMouseEnter={
                              openOnHover
                                ? () => showChildDropdown(item.id)
                                : undefined
                            }
                            onMouseLeave={
                              openOnHover
                                ? () => hideChildDropdown()
                                : undefined
                            }
                            onSelect={hideChildDropdown}
                            drop="end"
                            menuVariant={variant}>
                            {Array.isArray(item.children) &&
                            item.children.length ? (
                              item.children.map(
                                (childItem: RPCNavbarDropdownItemProps) => (
                                  <NavDropdown.Item
                                    className={
                                      childItem.children
                                        ? 'has-children'
                                        : undefined
                                    }
                                    key={childItem.id}
                                    onClick={(
                                      event: MouseEvent<HTMLDivElement>,
                                    ) => {
                                      if (
                                        onSecondLevelChildItemClick &&
                                        typeof onSecondLevelChildItemClick ===
                                          'function'
                                      )
                                        onSecondLevelChildItemClick(event);
                                      if (
                                        childItem &&
                                        childItem.onClick &&
                                        typeof childItem.onClick === 'function'
                                      )
                                        childItem.onClick(event);
                                    }}
                                    active={activeItem === childItem.id}>
                                    {childItem.children ? (
                                      <>{childItem.children}</>
                                    ) : (
                                      <>
                                        {renderItemTitle(
                                          childItem.icon,
                                          childItem.label,
                                          childItem.badgeContent,
                                        )}
                                      </>
                                    )}
                                  </NavDropdown.Item>
                                ),
                              )
                            ) : (
                              <>{item.children}</>
                            )}
                          </NavDropdown>
                        ) : (
                          <NavDropdown.Item
                            key={item.id}
                            onClick={(event: MouseEvent<HTMLDivElement>) => {
                              if (onFirstLevelChildItemClick)
                                onFirstLevelChildItemClick(event);
                              item.onClick(event);
                            }}
                            active={activeItem === item.id}>
                            <>
                              {renderItemTitle(
                                item.icon,
                                item.label,
                                item.badgeContent,
                              )}
                            </>
                          </NavDropdown.Item>
                        )}
                      </Fragment>
                    ),
                  )}
                </>
              ) : undefined}
            </>
          )}
        </>
      )}
    </NavDropdown>
  );
};

export const RPCNavbarDropdown = memo<RPCNavbarDropdownProps>(
  RPCNavbarDropdownComponent,
);
