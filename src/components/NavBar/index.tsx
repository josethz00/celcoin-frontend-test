import { Flex, Heading } from '@chakra-ui/react';
import { FaBitcoin, FaEthereum } from 'react-icons/fa';
import { SiBinance } from 'react-icons/si';

import styles from './navbar.module.css';

/**
 * NavBar - this component is used to render the navbar
 * @returns {JSX.Element}
 */
export default function NavBar(): JSX.Element {
  return (
    <Flex
      w="100%"
      h="80px"
      bg="gray.100"
      bgGradient="linear(to-r, blue.200, blue.500, gray.600)"
      alignItems="center"
      justifyContent="space-between"
      borderBottomWidth={3}
      borderBottomColor="purple.500"
    >
      <Heading
        fontStyle="italic"
        textTransform="uppercase"
        color="white"
        marginLeft={10}
      >
        Crypto Assets
      </Heading>
      <Flex marginRight={10}>
        <div className={styles.headerIcons}>
          <FaBitcoin />
        </div>
        <div className={styles.headerIcons}>
          <FaEthereum />
        </div>
        <div className={styles.headerIcons}>
          <SiBinance />
        </div>
      </Flex>
    </Flex>
  );
}
