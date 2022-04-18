import { IAppContext, IAsset } from '@/types';
import React, { useState } from 'react';

const AppContext = React.createContext({} as IAppContext);

interface IAppProvider {
  children: React.ReactNode;
}

/**
 * AppProvider - this component is used to provide the application context
 * @param param0 - child component
 * @returns {JSX.Element}
 */
export function AppProvider({ children }: IAppProvider): JSX.Element {
  const [assets, setAssets] = useState<IAsset[]>([]);

  return (
    <AppContext.Provider
      value={{
        assets,
        setAssets,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
