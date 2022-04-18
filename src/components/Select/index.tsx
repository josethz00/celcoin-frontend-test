import React from 'react';
import {
  Select as ChakraSelect,
  SelectProps as ChakraSelectProps,
} from '@chakra-ui/react';

/**
 * Custom Input component with styles
 * @param props - rest of the common HTML input properties
 * @returns {JSX.Element}
 */
export default function Select(props: ChakraSelectProps): JSX.Element {
  return (
    <ChakraSelect
      height="50px"
      backgroundColor="gray.800"
      outline={0}
      borderRadius="sm"
      focusBorderColor="blue.800"
      color="gray.500"
      _placeholder={{ color: 'white' }}
      {...props}
    >
      {props.children}
    </ChakraSelect>
  );
}
