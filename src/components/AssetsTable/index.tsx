import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Flex,
  Tfoot,
} from '@chakra-ui/react';
import { MdEdit, MdDeleteForever } from 'react-icons/md';
import EditModal from '../EditModal';
import useAssetsTableController from './assets-table.controller';
import styles from './assets-table.module.css';

/**
 * AssetsTable - this component is used to display the assets in a table format
 * @returns {JSX.Element}
 */
export default function AssetsTable(): JSX.Element {
  const {
    isOpen,
    onClose,
    onOpen,
    assets,
    setAssets,
    newAmount,
    setCurrentAsset,
    setNewAmount,
    currentAsset,
  } = useAssetsTableController();

  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Token</Th>
              <Th>Quantity</Th>
              <Th isNumeric>Amount in USD</Th>
            </Tr>
          </Thead>
          <Tbody>
            {assets.map((asset) => (
              <Tr key={asset.token}>
                <Td className={styles.tdContent}>{asset.token}</Td>
                <Td className={styles.tdContent}>{asset.quantity}</Td>
                <Td className={styles.tdContent}>
                  $ {(asset.currentPrice * asset.quantity).toFixed(2)}
                </Td>
                <Td className={styles.tdContent}>
                  <Flex justifyContent="space-between" w="50px">
                    <div className={styles.editNDeleteIcons}>
                      <MdEdit
                        onClick={() => {
                          setCurrentAsset(asset);
                          onOpen();
                        }}
                      />
                    </div>
                    <div className={styles.editNDeleteIcons}>
                      <MdDeleteForever
                        onClick={() =>
                          setAssets(
                            assets.filter((a) => a.token !== asset.token),
                          )
                        }
                      />
                    </div>
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>TOTAL: </Th>
              <Th></Th>
              <Th isNumeric>
                ${' '}
                {assets
                  .reduce(
                    (acc, asset) => acc + asset.currentPrice * asset.quantity,
                    0,
                  )
                  .toFixed(2)}
              </Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <EditModal
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        setNewAmount={setNewAmount}
        newAmount={newAmount}
        asset={currentAsset}
      />
    </>
  );
}
