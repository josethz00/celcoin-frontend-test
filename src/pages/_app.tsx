import ThemeContainer from '@/components/ThemeContainer';
import { AppProvider } from '@/contexts';
import { AppProps } from 'next/app';

/**
 * MyApp - initial application component
 * @param {AppProps} props - Component and pageProps
 * @returns {JSX.Element}
 */
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AppProvider>
      <ThemeContainer>
        <Component {...pageProps} />
      </ThemeContainer>
    </AppProvider>
  );
}

export default MyApp;
