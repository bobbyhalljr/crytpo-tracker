import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Switch } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Navbar from './components/Navbar';
import Coins from './pages/Coins';
import SingleCoin from './pages/SingleCoin';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});

const App = () => {
  const [coins, setCoins] = useState([])

  useEffect(() => {
    axios.get('https://api.coinpaprika.com/v1/tickers')
    .then(res => {
      console.log(res.data)
      if(!res.data){
        return (
          <>
          Loading ...
          </>
        )
      }
      setCoins(res.data)
    })
    .catch(error => console.log(error))
  },[])

  return (
    <ApolloProvider client={client}>
      <div className="">
        <Navbar />

        <Switch>
          <Route exact path='/' render={props => <Coins {...props} coins={coins} />} />
          <Route exact path='/:id' render={props => <SingleCoin {...props} coins={coins} />} />
        </Switch>
      </div>
    </ApolloProvider>
  );
}

export default App;
