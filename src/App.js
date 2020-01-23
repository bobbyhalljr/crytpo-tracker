import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Coins from './pages/Coins';
import SingleCoin from './pages/SingleCoin';

const App = () => {
  const [coins, setCoins] = useState([])

  useEffect(() => {
    axios.get('https://api.coinpaprika.com/v1/tickers')
    .then(res => {
      console.log(res.data)
      setCoins(res.data)
    })
    .catch(error => console.log(error))
  },[])

  return (
    <div className="">
      <Navbar />

      <Switch>
        <Route exact path='/' render={props => <Coins {...props} coins={coins} />} />
        <Route exact path='/:id' render={props => <SingleCoin {...props} coins={coins} />} />
      </Switch>
    </div>
  );
}

export default App;
