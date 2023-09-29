import fetchMock from 'jest-fetch-mock'

import { mockExchangeItem } from '../../../mocks/exchangesItem'
import { mockExchangesList } from '../../../mocks/exchangesList'
import { getExchangesList, getExchangeItem } from '../CoingeckoService'

beforeEach(() => {
  fetchMock.resetMocks()
})

describe('CoingeckoService', () => {
  jest.mock('node-fetch')
  const mockParams = { per_page: '10', page: '1' }
  const mockExchangeId = 'binance'

  test('should fetch exchange list successfully', async () => {
    const mockResponse = mockExchangesList

    // @ts-expect-error
    fetchMock.mockResolvedValueOnce({
      status: 200,
      json: async () => mockResponse,
    })

    const exchanges = await getExchangesList(mockParams)
    expect(exchanges).toEqual(mockResponse)
  })

  it('should handle fetch errors', async () => {
    fetchMock.mockRejectedValueOnce(new Error('Fetch error'))

    const exchangeItem = await getExchangesList(mockParams)
    expect(exchangeItem).toBeNull()
  })

  it('should fetch exchange item successfully', async () => {
    const mockResponse = mockExchangeItem

    // @ts-expect-error
    fetchMock.mockResolvedValueOnce({
      status: 200,
      json: async () => mockResponse,
    })

    const exchangeItem = await getExchangeItem(mockExchangeId)

    expect(exchangeItem).toEqual(mockResponse)
  })

  it('should handle fetch errors', async () => {
    fetchMock.mockRejectedValueOnce(new Error('Fetch error'))

    const exchangeItem = await getExchangeItem(mockExchangeId)

    expect(exchangeItem).toBeNull()
  })
})
