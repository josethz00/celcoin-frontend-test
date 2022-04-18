import AppContext from '@/contexts/app.context';
import { IEditModalController } from '@/types';
import { useDisclosure } from '@chakra-ui/react';
import { useContext, useState } from 'react';

/**
 * EditModalController - This is the controller for the EditModal component
 * @returns {IEditModalController}
 */
export default function useEditModalController(): IEditModalController {
  const [newAmount, setNewAmount] = useState<number>(0);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { setAssets, assets } = useContext(AppContext);

  return {
    setNewAmount,
    newAmount,
    isOpen,
    onClose,
    onOpen,
    setAssets,
    assets,
  };
}
