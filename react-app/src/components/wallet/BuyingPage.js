import React, {Component} from 'react'
import {MatchType} from '../../constants/types'
import {Link} from 'react-router-dom'
import {CryptoProvider} from '../providers/CryptoProvider'

// Second part , check if the links and redirection works

// Third part: use a redux action to send a new object to your reducer
// The Object expected is {cryptoId, crypto *the name if it*, rate *price*, quantity, date}
// You need to fetch the history from the redux (Check react-redux)
// hint: decorators are cool
// Also the provider is broken, it's Victor fault I think

export class BuyingPage extends Component {
  static propTypes = {
    match: MatchType,
  }
  state = {
    quantity: 1,
  }

  buyCryptos = () => {
    // TODO
  }

  render() {
    const {quantity} = this.state
    const {
      match: {
        params: {id},
      },
    } = this.props
    return (
      <CryptoProvider id={id}>
        {' '}
        {/*
          this is broken (third part)
      */}
        {({crypto, loading, error}) => (
          <div>
            {!error && !loading ? (
              <div>
                <button
                  onClick={alert(
                    'This button should send you to past or in this case the dashboard'
                  )}
                >
                  Go Back to the DashBoard
                </button>
                <Link to="/wallet">Go to your wallet</Link>
                <h2>Buy {crypto.name}</h2>
                <h4>Rate : ${crypto.quotes.USD.price}</h4>
                <h4>Quantity : </h4>
                <input
                  type="number"
                  value={quantity}
                  onChange={e => this.setState({quantity: e.target.value})}
                />
                <button onClick={() => alert('Hello from the otherside')}>
                  Buy
                </button>
                {/*
                  Uncomment the p when you start the third part
                  getWalletCryptoNbr need some arguement to work : 
                  check out the function and find out
                */}
                {/* <p>{`You have ${
                  getWalletCryptoNbr() ? getWalletCryptoNbr() : 'no'
                } ${crypto.name} `}</p> */}
                {}
              </div>
            ) : (
              <p>Loading ...</p>
            )}
          </div>
        )}
      </CryptoProvider>
    )
  }
}
