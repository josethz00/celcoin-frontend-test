import { Theme as DefaultTheme, theme } from '@chakra-ui/react';

const customTheme: DefaultTheme = {
  ...({} as DefaultTheme),
  config: {
    useSystemColorMode: true,
  },
  fonts: {
    body: 'Poppins, system-ui, sans-serif',
    heading: 'Poppins, system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  fontWeights: {
    ...theme.fontWeights,
    thin: 100,
    light: 200,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  radii: {
    ...theme.radii,
    sm: '5px',
    md: '8px',
  },
  colors: {
    ...theme.colors,
    gray: {
      ...theme.colors.gray,
      200: '#e1e1e6',
      300: '#333',
      600: '#29292e',
      700: '#202024',
      800: '#121214',
    },
    blue: {
      ...theme.colors.blue,
      200: '#1B5886',
      500: '#5271ff',
      600: '#3a60ff',
      700: '#2d4fff',
      800: '#003A6B',
    },
  },
};

export default customTheme;
