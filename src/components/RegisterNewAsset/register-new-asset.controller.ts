import { IRegisterNewAssetController } from '@/types';
import { getCoinInfo, getCoinsList } from '@/services/api';
import { useContext, useEffect, useState } from 'react';
import { ICoin } from '@/types';
import AppContext from '@/contexts/app.context';
import { useToast } from '@chakra-ui/react';

/**
 * This is the controller for the RegisterNewAsset component
 * @returns {IRegisterNewAssetController}
 */
export default function useRegisterNewAssetController(): IRegisterNewAssetController {
  const { assets, setAssets } = useContext(AppContext);

  const [coinsList, setCoinsList] = useState<ICoin[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [amount, setAmount] = useState<number>(0);
  const [coin, setCoin] = useState<string>();
  const [symbol, setSymbol] = useState<string>();

  const toast = useToast();

  useEffect(() => {
    getCoinsList()
      .then((response) => {
        setCoinsList(
          response.data.map((coin: ICoin) => ({
            id: coin.id,
            name: coin.name,
            symbol: coin.symbol,
            currentPrice: coin.current_price,
          })),
        );
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  /**
   * Function that will be called when the form were submitted
   * @param event - The event that triggered the function
   * @returns {void}
   */
  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    if (!amount || amount <= 0) {
      toast({
        title: 'Error - invalid amount',
        description: 'Please enter an amount greater than 0',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    } else if (!coin) {
      toast({
        title: 'Error - invalid coin',
        description: 'Please select a coin',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    } else if (assets.find((asset) => asset.token === symbol)) {
      toast({
        title: 'Error - asset already registered',
        description: 'Please select a different coin',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    } else {
      getCoinInfo(coin).then((response) => {
        const coin = response.data;
        const asset = {
          token: coin.symbol,
          quantity: amount,
          currentPrice: coin.market_data.current_price.usd,
        };
        setAssets([...assets, asset]);
      });
      toast({
        title: 'Success',
        description: 'Asset added successfully',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      return;
    }
  }

  /**
   * Function to clear the assets list by reseting the context state
   */
  function clearAssets(): void {
    setCoin('');
    setAmount(0);
    setAssets([]);
  }

  return {
    getCoinsList,
    coinsList,
    isLoading,
    amount,
    setAmount,
    coin,
    setCoin,
    handleSubmit,
    clearAssets,
    symbol,
    setSymbol,
  };
}
