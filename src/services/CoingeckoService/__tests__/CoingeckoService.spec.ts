import { mockExchangesList } from "../../../mocks/exchangesList";
import { getExchangesList } from '../CoingeckoService';

describe('CoingeckoService', () => {
  const fetchMock = jest.fn();
  const mockUrl = "https://api.coingecko.com/api/v3";
  const mockParams = { per_page: '10', page: '1' };

  it('fetches a list of exchanges', async () => {});
});
