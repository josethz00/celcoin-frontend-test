import { SimpleGrid } from '@chakra-ui/react';

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
    <SimpleGrid
      as="main"
      height="100vh"
      templateColumns={{ lg: '1fr 480px 680px 1fr', sm: '480px' }}
      templateRows={{ lg: '1fr 450px 1fr', sm: '400px' }}
      spacing={{ lg: '100px', sm: '50px' }}
      templateAreas={{
        lg: "'. . . .' '. form list .' '. . . .'",
        sm: "'form' 'list'",
      }}
      justifyContent="center"
      alignItems="center"
      backgroundColor="gray.800"
    >
      {children}
    </SimpleGrid>
  );
}
