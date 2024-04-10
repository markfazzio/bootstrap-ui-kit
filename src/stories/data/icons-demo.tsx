import React, { ReactNode } from 'react';

// basic
import { IconCaretDown } from '@/components/icons/basic-icons/IconCaretDown';
import { IconCaretUp } from '@/components/icons/basic-icons/IconCaretUp';
import { IconHelp } from '@/components/icons/basic-icons/IconHelp';
import { IconMinusCircle } from '@/components/icons/basic-icons/IconMinusCircle';
import { IconPlusCircle } from '@/components/icons/basic-icons/IconPlusCircle';
import { IconPNG } from '@/components/icons/basic-icons/IconPNG';
import { IconRemove } from '@/components/icons/basic-icons/IconRemove';
import { IconRemoveCircle } from '@/components/icons/basic-icons/IconRemoveCircle';
import { IconRotate } from '@/components/icons/basic-icons/IconRotate';

export interface IconsDemoDataSection {
  sectionName: string;
  icons: Array<{ label: string; icon: ReactNode }>;
}

export const ICONS_DEMO_DATA: Array<IconsDemoDataSection> = [
  {
    sectionName: 'Basic Icons',
    icons: [
      {
        label: 'IconCaretDown',
        icon: <IconCaretDown />,
      },
      {
        label: 'IconCaretUp',
        icon: <IconCaretUp />,
      },

      {
        label: 'IconHelp',
        icon: <IconHelp />,
      },
      {
        label: 'IconMinusCircle',
        icon: <IconMinusCircle />,
      },
      {
        label: 'IconPlusCircle',
        icon: <IconPlusCircle />,
      },
      {
        label: 'IconPNG',
        icon: <IconPNG />,
      },
      {
        label: 'IconRemove',
        icon: <IconRemove />,
      },
      {
        label: 'IconRemoveCircle',
        icon: <IconRemoveCircle />,
      },
      {
        label: 'IconRotate',
        icon: <IconRotate />,
      },
    ],
  },
];
