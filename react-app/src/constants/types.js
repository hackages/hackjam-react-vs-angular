import PropTypes from 'prop-types'

export const MatchType = PropTypes.shape({
  params: PropTypes.shape({
    id: PropTypes.string,
  }),
})

export const HistoryType = PropTypes.shape({
  goBack: PropTypes.func,
})

export const CryptoType = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  symbol: PropTypes.string,
  website_slug: PropTypes.string,
  rank: PropTypes.number,
  circulating_supply: PropTypes.number,
  total_supply: PropTypes.number,
  max_supply: PropTypes.number,
  quotes: PropTypes.shape({
    USD: PropTypes.shape({
      price: PropTypes.number,
      volume_24h: PropTypes.number,
      market_cap: PropTypes.number,
      percent_change_1h: PropTypes.number,
      percent_change_24h: PropTypes.number,
      percent_change_7d: PropTypes.number,
    }),
  }),
  last_updated: PropTypes.number,
})

export const MetaData = PropTypes.shape({
  timestamp: PropTypes.number,
  error: PropTypes.string,
})
