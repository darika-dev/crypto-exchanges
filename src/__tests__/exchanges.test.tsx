import { render, screen } from '@testing-library/react'
import { useRouter } from 'next/navigation'

import { ExchangesListItem } from '../components/ExchangesList/ExchangesListItem'
import { mockExchangesList } from '../mocks/exchangesList'

jest.mock('next/navigation', () => ({
  ...(jest.requireActual('next/navigation') as object),
  useRouter: jest.fn(),
}))

const table = document.createElement('tbody')

describe('Index page', () => {
  test('should render table with provided exchanges', async () => {
    ;(useRouter as jest.Mock).mockReturnValue({ query: {} })

    render(<ExchangesListItem exchange={mockExchangesList[0]} />, {
      container: document.body.appendChild(table),
    })

    await screen.findByTestId('exchange-logo')
    await screen.findByText('Binance')
    await screen.findByText('Cayman Islands')
    const externalLink = await screen.findByTestId('exchange-link')
    expect(externalLink.innerHTML).toEqual('<span>binance.com</span>')
    const internalLink = await screen.findByTestId('exchange-name')
    // @ts-expect-error
    expect(internalLink).toHaveAttribute('href', '/exchange/binance')
  })
})
