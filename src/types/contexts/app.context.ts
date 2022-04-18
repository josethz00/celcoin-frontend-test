import { IAsset } from '..';

export interface IAppContext {
  setAssets: (assets: IAsset[]) => void;
  assets: IAsset[];
}
