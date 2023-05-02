import { defineStyleConfig } from '@chakra-ui/react';

export const Button = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    fontWeight: 'bold',
    bg: 'secondary.main',
    /* br: '8px', */
    color: 'primary',
    fontSize: 'fontSize.14',
    py: '16px',
    _hover: {
      bg: 'secondary.hover',
    },
    _active: {
      bg: 'secondary.active',
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
      backgroundColor: 'blue.main',
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
