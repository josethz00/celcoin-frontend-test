import { IAsset } from '..';

export interface IAssetsTableController {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  setAssets: (assets: IAsset[]) => void;
  assets: IAsset[];
  newAmount: number;
  setNewAmount: (amount: number) => void;
  currentAsset?: IAsset;
  setCurrentAsset: (asset: IAsset) => void;
}
