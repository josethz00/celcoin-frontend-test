import axios, { AxiosResponse } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
});

/**
 * This function is used to return a list with all the coins
 * supported by the API
 * @returns {Promise<AxiosResponse<any, any>>}
 */
export const getCoinsList = async (): Promise<AxiosResponse<any, any>> => {
  return await axiosInstance.get(
    '/coins/markets?vs_currency=usd&order=market_cap_desc&page=1&per_page=30',
  );
};

/**
 * Function that will be called to get the current price of the coin
 * passed as parameter
 * @param {string} coinId - The coin id (e.g. bitcoin)
 * @returns {Promise<AxiosResponse<any, any>>}
 */
export const getCoinInfo = async (
  coinId: string,
): Promise<AxiosResponse<any, any>> => {
  return await axiosInstance.get(`/coins/${coinId}`);
};
