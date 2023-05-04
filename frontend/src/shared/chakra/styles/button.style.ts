import { defineStyleConfig } from '@chakra-ui/react';

export const Button = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    fontWeight: 'semiBold',
    bg: 'secondaryButton.main',
    /* br: '8px', */
    color: 'primary',
    
    py: '8px',
    _hover: {
      bg: 'secondaryButton.hover',
    },
    _active: {
      bg: 'secondaryButton.active',
    },
  },
  // Two sizes: sm and md
  /* sizes: {
      sm: {
        fontSize: 'sm',
        px: 4, // <-- px is short for paddingLeft and paddingRight
        py: 3, // <-- py is short for paddingTop and paddingBottom
      },
      md: {
        fontSize: 'md',
        px: 6, // <-- these values are tokens from the design system
        py: 4, // <-- these values are tokens from the design system
      },
    }, */
  // Two variants: outline and solid
  variants: {
    base: {},
    blue: {
      height: 'auto',
      backgroundColor: 'blue.main',
      borderRadius: '8px',
      color: 'white',
      _hover: {
        bg: 'blue.hover',
      },
      _active: {
        bg: 'blue.active',
      },
    },
  },
  // The default size and variant values
  defaultProps: {
    // Then here we set the base variant as the default
    variant: 'base',
  },
});
