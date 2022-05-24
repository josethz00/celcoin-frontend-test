import {
  Box,
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  Text,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import styles from './content-navbar.module.css';
import Image from 'next/image';

/**
 *
 * @param param0
 * @returns
 */
export default function ContentNavbar(): JSX.Element {
  return (
    <Box
      borderTopLeftRadius={30}
      borderTopRightRadius={30}
      backgroundColor="#FFF"
      height={88}
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        height="100%"
        borderRadius="30px 30px 0px 0px"
      >
        <InputGroup marginLeft={32} width={400} height={40}>
          <InputLeftElement
            top={10}
            marginLeft={10}
            children={
              <Icon icon="bx:search-alt-2" color="#787686" fontSize={20} />
            }
          />
          <Input
            width="100%"
            height="100%"
            padding={10}
            paddingLeft={41}
            placeholder="Busca..."
            borderRadius={5}
            _placeholder={{
              color: 'rgba(44, 46, 61, 0.3)',
              fontWeight: 400,
            }}
            backgroundColor="#F5F5F5"
          />
        </InputGroup>
        <Flex justifyContent="center" alignItems="center">
          <Icon
            icon="ci:settings-filled"
            className={styles.profileHeaderIcons}
          />
          <Box position="relative">
            <Icon icon="mdi:bell" className={styles.profileHeaderIcons} />
            <Box
              width={7}
              height={7}
              backgroundColor="#ff001f"
              borderRadius="50%"
              left={14}
              top={2}
              position="absolute"
            ></Box>
          </Box>
          <Flex
            justifyContent="center"
            alignItems="center"
            marginRight={28}
            cursor="pointer"
          >
            <Text marginRight={15} color="rgba(86, 84, 104, 0.8)">
              Olá, <b>José</b>
            </Text>
            <Box
              width={40}
              height={40}
              borderRadius="50%"
              backgroundColor="#ccc"
            >
              <Image
                src={require('@/assets/images/profile.jpg')}
                alt="Profile photo"
                className={styles.profilePhoto}
              />
            </Box>
          </Flex>
          <Icon
            icon="healthicons:ui-menu-grid"
            className={styles.profileHeaderIcons}
          />
        </Flex>
      </Flex>
    </Box>
  );
}
