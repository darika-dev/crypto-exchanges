import { mockExchangeItem } from '../../../mocks/exchangesItem'
import { mockExchangesList } from '../../../mocks/exchangesList'
import { getExchangesList, getExchangeItem } from '../CoingeckoService'

beforeEach(() => {
  fetch.resetMocks()
})

describe('CoingeckoService', () => {
  jest.mock('node-fetch')
  const mockParams = { per_page: '10', page: '1' }
  const mockExchangeId = 'binance'

  it('should fetch exchange list successfully', async () => {
    const mockResponse = mockExchangesList

    fetch.mockResolvedValueOnce({
      status: 200,
      json: async () => mockResponse,
    })

    const exchanges = await getExchangesList(mockParams)
    expect(exchanges).toEqual(mockResponse)
  })

  it('should handle fetch errors', async () => {
    fetch.mockRejectedValueOnce(new Error('Fetch error'))

    const exchangeItem = await getExchangesList(mockParams)
    expect(exchangeItem).toBeNull()
  })

  it('should fetch exchange item successfully', async () => {
    const mockResponse = mockExchangeItem

    fetch.mockResolvedValueOnce({
      status: 200,
      json: async () => mockResponse,
    })

    const exchangeItem = await getExchangeItem(mockExchangeId)

    expect(exchangeItem).toEqual(mockResponse)
  })

  it('should handle fetch errors', async () => {
    fetch.mockRejectedValueOnce(new Error('Fetch error'))

    const exchangeItem = await getExchangeItem(mockExchangeId)

    expect(exchangeItem).toBeNull()
  })
})
