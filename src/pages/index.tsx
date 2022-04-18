import AppContainer from '@/components/AppContainer';
import AssetsList from '@/components/AssetsList';
import NavBar from '@/components/NavBar';
import RegisterNewAsset from '@/components/RegisterNewAsset';

/**
 * Homepage
 * @returns {JSX.Element}
 */
function Home(): JSX.Element {
  return (
    <>
      <NavBar />
      <AppContainer>
        <RegisterNewAsset />
        <AssetsList />
      </AppContainer>
    </>
  );
}

export default Home;
