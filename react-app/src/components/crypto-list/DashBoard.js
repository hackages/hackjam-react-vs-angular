import React, {Component, Fragment} from 'react'
import {
  Container,
  SubHeader,
  Search,
  Row,
  RefreshButton,
} from '../dumb/styledComponent/dashboard'
import {TextNum, Loader} from '../dumb/styledComponent/shared'
import {CircleLoader} from 'react-spinners'

// First part(introduction) =>
// 1. You need first to get some datas.
// The function CallAxios is aleady define and called but its implementation is not complet.
// You need to do a call http to get the data
// you can find the links on the file  /src/constants/url
// the path to get all the cryptos is ‘/cryptos’
// note : two urls are available : the local one (recommanded) but you need to start the server or the clouded one.
// Use the state and setState to save the response of the call and don't forget to initilize the state
//
// 2. When the data are fetched , you will need to pass them to the List component (Component that you have to write first)
//
// 3. Since everything is displayed properly. you need now to handle the search
//   -> implements handleInput() and GetFilteredCryptos()
//
// 4. Plug the refresh function with the refresh button

export class DashBoard extends Component {
  state = {
    //initialise the values
    loading: false,
    loadingRefresh: false,
  }

  callAxios = ({loader} = {loader: 'loading'}) => {
    this.setState({[loader]: true})
    //TODO
  }

  refresh = () => {
    this.callAxios({
      loader: 'loadingRefresh',
    })
  }

  getData = () => {
    this.callAxios({loader: 'loading'})
  }

  handleInput = () => {}
  //TODO handle the changes

  getFilterdCryptos = () => {}
  //TODO get the cryptoCurrency filtered by the input value

  componentDidMount() {
    //initialise the call when the component mount (get the data)
    const interval = setInterval(() => this.refresh(), 300000)
    this.setState({interval})
  }
  componentWillUnmount() {
    //Clear the interval to avoid any memory leak
  }
  render() {
    //TODO fetch props and state
    //TODO get Filtered values
    const filteredCryptos = []
    const metadata = {}
    const loadingRefresh = false
    const loading = true
    return (
      <Fragment>
        <Container>
          <SubHeader>
            <Row>
              <RefreshButton onClick={() => alert('Hello there')}>
                {/*Does this refresh ?*/}
                Refresh
              </RefreshButton>
              <TextNum>
                {filteredCryptos && filteredCryptos.length} /{' '}
                {metadata.num_cryptocurrencies}{' '}
              </TextNum>
              {loadingRefresh && (
                <CircleLoader color={'#673ab7'} loading={loadingRefresh} />
              )}
            </Row>
            <Search
              type="text"
              placeholder="Search"
              onChange={this.handleInput()}
            />
          </SubHeader>

          {loading ? (
            <Loader>
              <CircleLoader color={'#673ab7'} loading={loading} />
            </Loader>
          ) : (
            {
              /*Call the List component and pass the cryptos as a prop*/
            }
          )}
        </Container>
      </Fragment>
    )
  }
}
