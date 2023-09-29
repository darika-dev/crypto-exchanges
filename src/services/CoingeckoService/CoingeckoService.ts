import { Exchange, ExchangeListItem } from './CoingeckoService.types'

const API_URL: string = 'https://api.coingecko.com/api/v3'

export const getExchangesList = async (searchParams?: {
  per_page: string
  page: string
}): Promise<ExchangeListItem[] | null> => {
  try {
    const url = new URL(`${API_URL}/exchanges`)
    if (searchParams) {
      url.search = new URLSearchParams(searchParams).toString()
    }
    const response = await fetch(url)
    if (response.status !== 200) {
      return null
    }

    const data: ExchangeListItem[] = await response.json()
    return data
  } catch (error) {
    console.log(error)
    return null
  }
}

export const getExchangeItem = async (id: string): Promise<Exchange | null> => {
  try {
    const url = new URL(`${API_URL}/exchanges/${id}`)
    const response = await fetch(url.toString())
    if (response.status !== 200) {
      return null
    }
    const data: Exchange = await response.json()
    return data
  } catch (error) {
    console.log(error)
    return null
  }
}
