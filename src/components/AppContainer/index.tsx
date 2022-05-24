import { Flex } from '@chakra-ui/react';
import SidebarNav from '../SidebarNav';
import ContentSection from '../ContentSection';

/**
 * This is the AppContainer component, it will be used to wrap the
 * entire body of the homepage
 * @param param0 - child components (optional)
 * @returns {JSX.Element}
 */
export default function AppContainer({
  children,
}: React.PropsWithChildren<{}>): JSX.Element {
  return (
    <Flex
      as="main"
      height="calc(100vh - 64px)"
      marginTop={32}
      marginLeft={40}
      marginRight={40}
      marginBottom={32}
    >
      <SidebarNav />

      <ContentSection>{children}</ContentSection>
    </Flex>
  );
}
