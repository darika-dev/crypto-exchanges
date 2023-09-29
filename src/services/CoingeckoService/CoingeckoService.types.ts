export interface ExchangeListItem {
  country: string
  description: string
  has_trading_incentive: boolean
  id: string
  image: string
  name: string
  trade_volume_24h_btc: number
  trade_volume_24h_btc_normalized: number
  trust_score: number
  trust_score_rank: number
  url: string
  year_established: number
}

export interface Exchange {
  name: string
  year_established: number
  country: string
  description: string
  url: string
  image: string
  facebook_url: string
  reddit_url: string
  telegram_url: string
  slack_url: string
  other_url_1: string
  other_url_2: string
  twitter_handle: string
  has_trading_incentive: boolean
  centralized: boolean
  public_notice: string
  alert_notice: string
  trust_score: number
  trust_score_rank: number
  trade_volume_24h_btc: number
  trade_volume_24h_btc_normalized: number
  tickers: []
  status_updates: []
}
