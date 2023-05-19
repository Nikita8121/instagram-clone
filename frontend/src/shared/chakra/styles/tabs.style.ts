import { defineStyleConfig, TabList } from '@chakra-ui/react';

export const Tabs = defineStyleConfig({
  // The styles all button have in common
  
  baseStyle: {
    tablist: {
      justifyContent: 'center',
      borderTop: '1px solid var(--chakra-colors-secondaryLight)',
    },
    tab: {
      paddingRight: '0px !important',
      paddingLeft: '0px !important',
      'padding-top': '15px !important',
      'font-size': 'var(--chakra-fontSizes-sm) !important',
      borderTop: '1px solid rgba(0,0,0,0)',
      color: 'secondary',
     ' text-transform': 'uppercase',
      fontWeight: 'semiBold',
      mr: '60px',
      _selected: {
        borderTop: '1px solid var(--chakra-colors-black)',
        color: 'black',
        boxShadow: 'none',
        svg: {
          fill: 'black'
        }
      },
      svg: {
        fill: 'rgb(115,115,115)'
      }
    },
  },

  // Two variants: outline and solid
  variants: {
    base: {
    },
  },
  // The default size and variant values
  defaultProps: {
    // Then here we set the base variant as the default
    variant: 'base',
  },
});
