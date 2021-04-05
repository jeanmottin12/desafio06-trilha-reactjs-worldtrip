import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    brand_dark: {
      900: '#000000',
      500: '#47585B',
      100: '#999999',
      50: '#e1e1e1',
    },
    brand_light: {
      900: '#FFFFFF',
      100: '#DADADA',
      50: '#F5F8FA',
    },
    yellow: {
      900: '#FFBA08',
      50: '#ffdc83'
    }
  },
  fonts: {
    body: 'Poppins',
    heading: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'brand_light.50',
        color: 'brand_dark.500'
      }
    }
  }
})