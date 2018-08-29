import {ADD_HISTORY} from '../reducers/wallet'

// the addCrypto is done
// You need to make one to removeCrypto

export const addCrypto = payload => ({
  type: ADD_HISTORY,
  payload,
})

export const removeCrypto = () => {}
