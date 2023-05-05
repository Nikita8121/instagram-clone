import { extendTheme } from '@chakra-ui/react';
import { Button, Form } from './styles';


const breakpoints = {
  sm: '480px',
  md: '768px',
  lg: '960px',
  xlg: '1464px'
}

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
  breakpoints,
  colors: {
    primary: 'rgb(0,0,0)',
    secondary: 'rgb(115,115,115)',
    secondaryLight: 'rgb(219,219,219)',
    blue: {
      main: 'rgb(0,149, 249)',
      hover: 'rgb(24,119,242)',
      active: '#77A7FF',
    },
    white: '#FFFFFF',
    secondaryButton: {
      main: 'rgb(239,239,239)',
      hover: 'rgb(219,219,219)',
      active: 'rgb(224,224,224)',
    }
  },
  fonts: {
    body: '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
  },
  fontWeights: {
    bold: '700',
    semiBold: '600',
    regular: '400',
  },
  fontSizes: {
    sm: '12px',
    md: '14px',
    lg: '16px',
  },
  lineHeights: {
    fontSizeSm: '16px',
    fontSizeMd: '18px',
    fontSizeLg: '20px',
  },
  radii: {
    md: '3px',
  },
  components: {
    Button,
    Form
  },
  textStyles: {
    sm: {
      fontSize: '12',
      fontWeight: "regular",
      lineHeight: 'fontSizeSm'
    },
    md: {
      fontSize: '14',
      fontWeight: "regular",
      lineHeight: 'fontSizeMd'
    },
    lg: {
      fontSize: '16',
      fontWeight: "regular",
      lineHeight: 'fontSizeLg'
    }
  },
});
