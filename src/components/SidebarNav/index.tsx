import { Box, Divider, Flex, Text, List, ListItem } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './sidebar-nav.module.css';

/**
 * SidebarNav - this component is used to render the sidebar navigation
 * @returns {JSX.Element}
 */
export default function SidebarNav(): JSX.Element {
  const router = useRouter();

  return (
    <Box width={248} marginTop={24} height="100%">
      <Flex
        alignItems="center"
        justifyContent="space-between"
        width={208}
        height={40}
      >
        <Image
          src={require('@/assets/icons/logo.svg')}
          alt="logo"
          className={styles.logos}
        />
        <Image
          src={require('@/assets/images/textlogo.png')}
          alt="logo textual"
          className={styles.logos}
        />
      </Flex>
      <Divider
        orientation="horizontal"
        backgroundColor="rgba(255, 255, 255, 0.2)"
        height={1.5}
        marginTop={23}
        borderRadius={50}
        width={208}
      />
      <List className={styles.sidebarItems}>
        <Link href="/">
          <ListItem
            className={
              router.pathname === '/'
                ? `${styles.sidebarItem} ${styles.sidebarItemActive}`
                : styles.sidebarItem
            }
          >
            <Icon
              icon="ant-design:home-outlined"
              className={styles.sidebarItemIcon}
            />
            <Text>Dashboard</Text>
          </ListItem>
        </Link>
        <Link href="/patients">
          <ListItem
            className={
              router.pathname === '/patients'
                ? `${styles.sidebarItem} ${styles.sidebarItemActive}`
                : styles.sidebarItem
            }
          >
            <Icon
              icon="gridicons:product-downloadable"
              className={styles.sidebarItemIcon}
            />
            <Text>Pacientes</Text>
          </ListItem>
        </Link>
        <ListItem className={styles.sidebarItem}>
          <Icon
            icon="gridicons:product-downloadable"
            className={styles.sidebarItemIcon}
          />
          <Text>Testes</Text>
        </ListItem>
        <ListItem className={styles.sidebarItem}>
          <Icon
            icon="gridicons:product-downloadable"
            className={styles.sidebarItemIcon}
          />
          <Text>Configurações</Text>
        </ListItem>
      </List>
    </Box>
  );
}
