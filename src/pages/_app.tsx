import AppContainer from '@/components/AppContainer';
import ThemeContainer from '@/components/ThemeContainer';
import { AppProvider } from '@/contexts';
import { AppProps } from 'next/app';
import '../styles/global.css';

/**
 * MyApp - initial application component
 * @param {AppProps} props - Component and pageProps
 * @returns {JSX.Element}
 */
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AppProvider>
      <ThemeContainer>
        <AppContainer>
          <Component {...pageProps} />
        </AppContainer>
      </ThemeContainer>
    </AppProvider>
  );
}

export default MyApp;
