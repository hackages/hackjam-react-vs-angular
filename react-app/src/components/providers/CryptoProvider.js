import {Component} from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

export class CryptoProvider extends Component {
  static propTypes = {
    children: PropTypes.any,
  }
  state = {
    crypto: {},
    metadata: {},
    loading: true,
    error: '',
  }

  getOneCrypto = () => {
    this.setState({loading: true})
    axios
      .get(``) // where is the URL ? ask Victor
      .then(res =>
        this.state({
          crypto: res.data.cryptos,
          metadata: res.data.metadata,
          loading: false,
        })
      )
      .catch(err => this.state({error: err, loading: false}))
  }

  componentDidMount = () => {
    this.getOneCrypto()
    const interval = setInterval(() => this.getOneCrypto(), 300000)
    this.setState({interval})
  }
  componentWillUnmount() {
    const {interval} = this.state
    interval && clearInterval(interval)
  }

  render() {
    return this.props.children(this.state)
  }
}
