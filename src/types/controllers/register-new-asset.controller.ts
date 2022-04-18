import { AxiosResponse } from 'axios';
import { ICoin } from '..';

export interface IRegisterNewAssetController {
  getCoinsList: () => Promise<AxiosResponse<any, any>>;
  coinsList: ICoin[];
  isLoading: boolean;
  amount: number;
  setAmount: (amount: number) => void;
  coin?: string;
  setCoin: (coin: string) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  clearAssets: () => void;
  symbol?: string;
  setSymbol: (symbol: string) => void;
}
