import {History} from '../types/History'
import {BUY} from '../reducers/wallet'

export function getWalletCryptoNbr({
  history,
  name,
}: {
  history: History[]
  name: string
}): number {
  return history
    .filter(crypto => crypto.crypto === name)
    .reduce(
      (acc, current) =>
        current.type === BUY ? acc + current.quantity : acc - current.quantity,
      0
    )
}
