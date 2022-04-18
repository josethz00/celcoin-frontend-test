import React from 'react';
import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';

/**
 * Custom Input component with styles
 * @param props - rest of the common HTML input properties
 * @returns {JSX.Element}
 */
export default function Input(props: ChakraInputProps): JSX.Element {
  return (
    <ChakraInput
      height="50px"
      backgroundColor="gray.800"
      focusBorderColor="blue.800"
      color="gray.500"
      borderRadius="sm"
      _placeholder={{ color: 'gray.500' }}
      {...props}
    />
  );
}
