import React, {Component} from 'react'
import {DateTime} from 'luxon'
import {BUY} from '../../reducers/wallet'
import {
  Container,
  Title,
  SubTitle,
  Table,
  SellLink,
} from '../dumb/styledComponent/walletDashBoard'

// Fetch the data from the reducer
// use connect from react-redux

export class WalletDashBoard extends Component {
  state = {} // is the state usefull ?

  // You don't need to change anything in this function
  getCurrency = historyData =>
    historyData &&
    historyData.reduce(
      (acc, current) =>
        acc[current.crypto]
          ? {
              ...acc,
              [current.crypto]: {
                ...acc[current.crypto],
                quantity:
                  current.type === BUY
                    ? acc[current.crypto].quantity + current.quantity
                    : acc[current.crypto].quantity - current.quantity,
              },
            }
          : {
              ...acc,
              [current.crypto]: {
                quantity: current.quantity,
                id: current.cryptoId,
              },
            },
      {}
    )

  render() {
    const {historyData} = this.state
    const currencies = this.getCurrency(historyData)
    return (
      <Container>
        <Title>Your Wallet</Title>
        <SubTitle>Your Currencies </SubTitle>
        <Table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Quantity</td>
              <td />
            </tr>
          </thead>
          <tbody>
            {currencies &&
              Object.entries(currencies).map(currency => (
                <tr key={currency[1].id}>
                  <td>{currency[0]}</td>
                  <td>{currency[1].quantity}</td>
                  <td>
                    {currency[1].quantity !== 0 && (
                      <SellLink to={`/sell/${currency[1].id}`}>Sell</SellLink>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>

        <SubTitle>Your History</SubTitle>
        <Table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Rate</td>
              <td>Quantity</td>
              <td>Total</td>
              <td>Operation</td>
              <td>Date</td>
            </tr>
          </thead>
          <tbody>
            {historyData &&
              historyData.map(crypto => (
                <tr key={`${crypto.crypto} ${crypto.date}`}>
                  <td>{crypto.crypto}</td>
                  <td>{crypto.rate}</td>
                  <td>{crypto.quantity}</td>
                  <td>{(crypto.rate * crypto.quantity).toFixed(2)}</td>
                  <td>{`Display if it's a selling  or a buying event`}</td>
                  <td>
                    {DateTime.fromMillis(crypto.date).toLocaleString(
                      DateTime.DATETIME_FULL
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    )
  }
}
