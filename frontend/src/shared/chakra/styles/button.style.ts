import { defineStyleConfig } from '@chakra-ui/react';

export const Button = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    fontWeight: 'semiBold',
    bg: 'secondaryButton.main',
    borderRadius: '8px',
    color: 'primary',
    py: '8px',
    _hover: {
      bg: 'secondaryButton.hover',
    },
    _active: {
      bg: 'secondaryButton.active',
    },
  },
  sizes: {
      md: {
        fontSize: 'md',
      },
    },
  // Two variants: outline and solid
  variants: {
    base: {
      height: '32px'
    },
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
    icon: {
      height: 'auto',
      width: 'auto',
      py: '0',
      px: '0',
      backgroundColor: 'none',
      bg: 'none',
      _hover: {
        bg: 'none',
      },
      _active: {
        bg: 'none',
      },
    }
  },
  // The default size and variant values
  defaultProps: {
    // Then here we set the base variant as the default
    variant: 'base',
  },
});
