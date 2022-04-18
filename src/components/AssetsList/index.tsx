import { Box, Heading } from '@chakra-ui/react';
import AssetsTable from '../AssetsTable';

/**
 * AssetsList - this component is used to render the list grid area,
 * in this space will be displayed the list of the assets registered by the user
 * @returns {JSX.Element}
 */
export default function AssetsList(): JSX.Element {
  return (
    <Box
      gridArea="list"
      flexDir="column"
      alignItems="flex-start"
      h="100%"
      borderRadius="md"
    >
      <Heading size="xl" lineHeight="shorter" color="#aaa" marginBottom={10}>
        My current portfolio
      </Heading>
      <AssetsTable />
    </Box>
  );
}
