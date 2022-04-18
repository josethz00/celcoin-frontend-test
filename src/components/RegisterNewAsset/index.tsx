import { Flex, Button, Text } from '@chakra-ui/react';
import { AiOutlineClear } from 'react-icons/ai';
import { MdOutlineAdd } from 'react-icons/md';
import Input from '@/components/Input';
import Select from '@/components/Select';
import useRegisterNewAssetController from './register-new-asset.controller';
import { isArrayEmpty } from '@/utils';

/**
 * RegisterNewAsset - this component is a form that will be used to
 * register a new asset in the assets list
 * @returns {JSX.Element}
 */
export default function RegisterNewAsset(): JSX.Element {
  const {
    coinsList,
    isLoading,
    amount,
    setAmount,
    coin,
    setCoin,
    handleSubmit,
    clearAssets,
    setSymbol,
  } = useRegisterNewAssetController();

  return (
    <Flex
      gridArea="form"
      height="100%"
      backgroundColor="gray.700"
      borderRadius="md"
      flexDir="column"
      alignItems="stretch"
      marginTop={{
        lg: 0,
        sm: '30px',
      }}
      padding={16}
    >
      <form onSubmit={handleSubmit}>
        <Select
          value={coin}
          onChange={(e) => {
            setCoin(e.target.value);
            setSymbol(e.target.options[e.target.selectedIndex].text);
          }}
          isRequired
        >
          <option value="" disabled selected>
            Token Symbol
          </option>
          {isArrayEmpty(coinsList) && !isLoading
            ? coinsList.map((coin) => (
                <option key={coin.id} value={coin.id}>
                  {coin.symbol}
                </option>
              ))
            : null}
        </Select>

        <Input
          placeholder="Amount"
          marginTop={2}
          type="number"
          value={amount || ''}
          onChange={(e) => setAmount(Number(e.target.value))}
          isRequired
        />

        <Flex alignItems="center" justifyContent="center" marginTop={5}>
          <Button
            backgroundColor="blue.500"
            height="50px"
            borderRadius="sm"
            marginTop={6}
            marginRight={3}
            _hover={{ backgroundColor: 'blue.600' }}
            width="50%"
            type="submit"
          >
            <Text>ADD</Text>
            <MdOutlineAdd size={23} />
          </Button>
          <Button
            backgroundColor="blue.500"
            height="50px"
            borderRadius="sm"
            marginTop={6}
            _hover={{ backgroundColor: 'blue.600' }}
            width="50%"
            onClick={clearAssets}
          >
            <Text>CLEAR</Text>
            <AiOutlineClear size={23} />
          </Button>
        </Flex>
      </form>
    </Flex>
  );
}
