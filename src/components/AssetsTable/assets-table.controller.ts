import { useContext, useState } from 'react';
import AppContext from '@/contexts/app.context';
import { IAsset, IAssetsTableController } from '@/types';
import { useDisclosure } from '@chakra-ui/react';

/**
 * AssetsTableController
 * @returns {IAssetsTableController}
 */
export default function useAssetsTableController(): IAssetsTableController {
  const { assets, setAssets } = useContext(AppContext);
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [newAmount, setNewAmount] = useState<number>(0);
  const [currentAsset, setCurrentAsset] = useState<IAsset>();

  return {
    isOpen,
    onClose,
    onOpen,
    setAssets,
    assets,
    newAmount,
    setNewAmount,
    currentAsset,
    setCurrentAsset,
  };
}
