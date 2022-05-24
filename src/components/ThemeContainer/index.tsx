import '@fontsource/poppins';
import React from 'react';

import { ChakraProvider, CSSReset } from '@chakra-ui/react';

import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import customTheme from '@/styles/custom.theme';

interface ThemeContainerProps {
  children: React.ReactNode;
}

/**
 * ThemeContainer - this components is used to wrap all components that use
 * the theme provided by us.
 * @param {React.ReactNode} param0 - child components (optional)
 * @returns {JSX.Element}
 */
function ThemeContainer({ children }: ThemeContainerProps): JSX.Element {
  return (
    <ChakraProvider theme={customTheme}>
      <EmotionThemeProvider theme={customTheme}>
        <CSSReset />
        {children}
      </EmotionThemeProvider>
    </ChakraProvider>
  );
}

export default ThemeContainer;
