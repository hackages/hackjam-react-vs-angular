import React, {Component} from 'react'
import {getWalletCryptoNbr} from '../../utils/functions'
import {CryptoProvider} from '../providers/CryptoProvider'
import {Link} from 'react-router-dom'

// Like the Buying , you need to check the links
// Get the datas from redux , dispatch a new action
// And also, since the data from the provider could take time to be fetched,
// you need some conditional rendering
// hint : check what the provider gives you
export class SellingPage extends Component {
  state = {
    quantity: 1,
  }

  SellCryptos = () => {}

  render() {
    return (
      <CryptoProvider id="1">
        {' '}
        {/* the id is hardcoded, get the id from the url*/}
        {({crypto}) => (
          <div>
            <div>
              <Link to="/wallet">Go back to your wallet</Link>
              <h2>Sell your {crypto.name}</h2>
              <p>
                You have {getWalletCryptoNbr()}
                {/*need some params*/}
                {crypto.name} at the moment{' '}
              </p>
              <h3>What is the rate</h3>
              <h4>Rate : ${crypto.quotes.USD.price}</h4>
              <p>Last hour : {crypto.quotes.USD.percent_change_1h} %</p>
              <p>last day : {crypto.quotes.USD.percent_change_24h} %</p>
              <p>last week : {crypto.quotes.USD.percent_change_7d} %</p>
              <input
                type="number"
                onChange={e => this.state({quantity: e.target.value})}
              />

              <button onClick={() => alert('Ra ra rasputin')}>Sell</button>
            </div>
          </div>
        )}
      </CryptoProvider>
    )
  }
}
