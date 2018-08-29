import {BUY} from '../reducers/wallet'

export const getWalletCryptoNbr = ({historyData, name}) =>
  historyData &&
  historyData
    .filter(crypto => crypto.crypto === name)
    .reduce(
      (acc, current) =>
        current.type === BUY ? acc + current.quantity : acc - current.quantity,
      0
    )
