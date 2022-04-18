import AppContext from '@/contexts/app.context';
import { IAsset, IAssetsTableController } from '@/types';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';
import { useContext } from 'react';
import Input from '../Input';
import useEditModalController from './edit-modal.controller';

/**
 * EditModal - this component is used to render the modal that will be used to
 * edit a registry in the assets list
 * @returns {JSX.Element}
 */
export default function EditModal({
  isOpen,
  onClose,
  newAmount,
  setNewAmount,
  asset,
}: Pick<IAssetsTableController, 'isOpen' | 'onClose' | 'onOpen'> & {
  newAmount: number;
  setNewAmount: (amount: number) => void;
  asset?: IAsset;
}): JSX.Element {
  const {} = useEditModalController();
  const { assets, setAssets } = useContext(AppContext);

  /**
   * This function updates the asset quantity in the assets list
   * @returns {IAsset[]}
   */
  function updateAssetValue(): IAsset[] {
    const currentAsset = assets.filter((a) => a.token === asset?.token).shift();
    setAssets(assets.filter((a) => a.token !== asset?.token));
    if (currentAsset) {
      currentAsset.quantity = newAmount;
      return Array.from(new Set([...assets, currentAsset]));
    }
    return assets;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color="#aaa">Modal Title</ModalHeader>
        <ModalCloseButton color="#aaa" />
        <ModalBody>
          <Input
            placeholder="Enter the new quantity"
            type="number"
            value={newAmount || ''}
            onChange={(e) => setNewAmount(Number(e.target.value))}
          />
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={() => {
              setAssets(updateAssetValue());
              onClose();
            }}
          >
            Save
          </Button>
          <Button variant="ghost">Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
