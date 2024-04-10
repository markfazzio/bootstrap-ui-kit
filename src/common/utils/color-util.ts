import { Variant } from 'react-bootstrap/esm/types';

export const isLightText = (variant: Variant): boolean => {
  const textLightVariants = ['black', 'dark', 'danger', 'primary', 'info'];
  return textLightVariants.includes(variant);
};

export const isDarkBg = (variant: Variant): boolean => {
  const darkBgVariants = ['light', 'warning', 'white', 'outline-light'];
  return darkBgVariants.includes(variant);
};

export const isPrimaryLabel = (variant: Variant): boolean => {
  const primaryLabelVariants = ['light', 'white'];
  return primaryLabelVariants.includes(variant);
};
