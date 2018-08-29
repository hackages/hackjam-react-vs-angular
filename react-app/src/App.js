import React, {Component} from 'react'
import {DashBoard} from './components/crypto-list/DashBoard'

// Firt part(intro) => display the Header component on the top of the app
// path ./components/dumb/Header

// Second part(react-router) => Implements the routing sytem using react-router
// Check https://github.com/ReactTraining/react-router for the doc
// hint : you need to display the cryptos, buy them, see your wallet and sell cryptos

// Third part => You need to setup your store to use it globally on the app !

class App extends Component {
  render() {
    return <DashBoard />
  }
}

export default App
