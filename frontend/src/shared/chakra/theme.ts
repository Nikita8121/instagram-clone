import { extendTheme } from '@chakra-ui/react';
import { Button } from './styles';

export const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        maxWidth: '100vw',
        overflowX: 'hidden',
        fontFamily: 'body',
      },
    },
  },
  colors: {
    primary: 'rgb(0,0,0)',
    secondary: {
      main: 'rgb(239,239,239)',
      hover: 'rgb(219,219,219)',
      active: 'rgb(224,224,224)',
    },
    blue: {
      main: 'rgb(0,149, 249)',
      hover: 'rgb(24,119,242)',
      active: '#77A7FF',
    },
    white: '#FFFFFF',
  },
  fonts: {
    body: '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
  },
  fontWeight: {
    bold: '700',
    semiBold: '600',
    regular: '400',
  },
  fontSize: {
    14: '14px',
    16: '16px',
  },
  lineHeights: {
    fontSize16: '24px',
  },
  radii: {
    md: '3px',
  },
  components: {
    Button,
  },
});
