import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';

// components
import { RPCButton } from '@/components/RPCButton/RPCButton';
import { RPCNavbarDropdown } from '@/components/RPCNavbarDropdown/RPCNavbarDropdown';
import { RPCNavbarLink } from '@/components/RPCNavbarLink/RPCNavbarLink';
import { IconPlusCircle } from '@/components/icons/basic-icons/IconPlusCircle';
import { RPCNavbar } from '@/components/RPCNavbar/RPCNavbar';

// mock components
import { MockBackground } from './components/MockBackground';
import { NavbarRightItemType } from '@/components/RPCNavbar/RPCNavbar.types';

export default {
  title: 'RPCNavbar',
  component: RPCNavbar,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'info', 'dark', 'light'],
      control: { type: 'select' },
    },
  },
} as Meta<typeof RPCNavbar>;

// testing
const isUser = true;

const navbarItemsGames = [
  {
    id: 'game-menu-1',
    label: 'Pull Game',
  },
  {
    id: 'game-menu-2',
    label: 'Randomizer',
    badgeContent: 'NEW',
  },
];

const adminProductsItems = [
  {
    id: 'products-update',
    label: 'Update Products',
    onClick: () => console.log('update products menu clicked'),
  },
  {
    id: 'products-bulk-import',
    label: 'Bulk Import Products',
    onClick: () => console.log('bulk import products menu clicked'),
  },
];

const navbarRightItems: Array<NavbarRightItemType> = [
  {
    id: 'cart',
    label: 'Cart',
    badgeContent: '0',
  },
  {
    id: 'user',
    label: 'Login/Signup',
    type: 'dropdown',
    items: [
      {
        id: 'profile',
        label: 'My Profile',
      },
      {
        id: 'logout',
        label: 'Logout',
      },
    ],
  },
];

const Template: StoryFn<any> = args => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <MockBackground>
      {args.showAdminBar ? (
        <RPCNavbar
          {...args}
          extraOptionsMobile={<small>mark@markfazzio.com</small>}
          isSubNav
          variant="dark"
          navbarRightChildren={<small>mark@markfazzio.com</small>}
          onLogoClick={() => console.log('logo clicked')}
          onHideMobileMenu={() => setIsMobileOpen(false)}
          onToggleClick={() => setIsMobileOpen(!isMobileOpen)}>
          <RPCNavbarLink label="Admin Home" />
          <RPCNavbarDropdown
            id="products-dropdown"
            label="Products"
            openOnHover={!isMobileOpen}
            items={adminProductsItems}
            variant="dark"
            // activeChild="english-sets"
          />
        </RPCNavbar>
      ) : undefined}

      <RPCNavbar
        {...args}
        extraOptionsMobile={
          <RPCButton
            badgeLabel="3"
            variant="dark"
            className="btn-cart"
            onClick={() => console.log('cart clicked')}
          />
        }
        isMobileShowing={isMobileOpen}
        navbarRightItems={navbarRightItems}
        onLogoClick={() => console.log('logo clicked')}
        onHideMobileMenu={() => setIsMobileOpen(false)}
        onToggleClick={() => setIsMobileOpen(!isMobileOpen)}
        openDropdownsOnHover={!isMobileOpen}>
        <RPCNavbarLink label="The Digital TCG" badgeContent="NEW" />
        <RPCNavbarDropdown
          id="games-dropdown"
          label="Games"
          items={navbarItemsGames}
          openOnHover={!isMobileOpen}
          onFirstLevelChildItemClick={() => setIsMobileOpen(false)}
        />
        {isUser && (
          <RPCButton
            disabled
            iconPosition="right"
            variant="primary"
            icon={<IconPlusCircle fill="#fff" />}
            label="Create"
          />
        )}
      </RPCNavbar>
    </MockBackground>
  );
};

export const DefaultUsage = Template.bind({});

DefaultUsage.args = {
  variant: 'light',
  searchComponent: (
    <input type="text" className="form-control" placeholder="Search" />
  ),
};

export const AdminBar = Template.bind({});

AdminBar.args = {
  showAdminBar: true,
  variant: 'light',
};
