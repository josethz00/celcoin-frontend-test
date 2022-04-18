import { IAsset } from '..';

export interface IEditModalController {
  setNewAmount: (amount: number) => void;
  newAmount: number;
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  setAssets: (assets: IAsset[]) => void;
  assets: IAsset[];
}
