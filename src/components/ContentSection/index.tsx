import { Box } from '@chakra-ui/react';
import ContentNavbar from '../ContentNavbar';

/**
 *
 * @param param0
 * @returns
 */
export default function ContentSection({
  children,
}: React.PropsWithChildren<{}>): JSX.Element {
  return (
    <Box
      height="100%"
      flexGrow={1}
      backgroundColor="#EFF2F9"
      borderRadius={30}
      filter="drop-shadow(0px 1px 30px rgba(0, 0, 0, 0.15))"
    >
      <ContentNavbar />
      <Box
        height="calc(100% - 88px - 30px)"
        overflowY="auto"
        css={{
          '&::-webkit-scrollbar': {
            width: '7px',
          },
          '&::-webkit-scrollbar-track': {
            width: '7px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#ccc',
            borderRadius: '24px',
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
