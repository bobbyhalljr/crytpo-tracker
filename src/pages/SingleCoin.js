import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CoinInfo from '../components/CoinInfo';
import Team from '../components/Team';
import Website from '../components/Website';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FaArrowLeft, FaRegHeart, FaRegThumbsUp, FaRegCommentDots } from 'react-icons/fa'

const SingleCoin = ({ match, history}) => {
    // coin
    const [coin, setCoin] = useState({
        team: [],
        whitepaper: {},
        links: {
            website: []
      }
    })

    // favorites
    const [favs, setFavs] = useState([])
    // color
    const yellow = '#FFD712';
    const [clicked, setClicked] = useState(false)

    // add to favs
    const addToFavs = () => {
        setClicked(!clicked)
    }

    const getCoin = match.params.id;

    useEffect(() => {
        axios.get(`https://api.coinpaprika.com/v1/coins/${getCoin}`)
        .then(res => {
            console.log(res.data)
            setCoin(res.data)
        })
        .catch(err => console.log(err))
    },[setCoin])

    return (
        <div className='w-full'>
            <div className=''>
                <div className=''>
                    <button onClick={() => history.goBack('/')} className='flex items-center justify-center bg-blue-500 text-md w-40 font-medium p-2 m-4 text-white rounded-lg'><FaArrowLeft /> <span className='ml-2'>Back to coins</span></button>
                </div>
            </div>
            <div className='flex items-center justify-center mt-12'>
                <h1 className='text-3xl font-bold mr-2'>{coin.name}</h1>
                <h1 className='text-xl font-medium text-gray-500'>{coin.symbol}</h1>
            </div>
            <h3 className='mt-4 text-gray-600 text-xl font-medium'>{coin.description}</h3>
            <div className='flex text-3xl justify-center mt-10 mb-6 px-4'>
                <button onClick={addToFavs} className='mr-10'><FaRegHeart className={clicked ? yellow : ''} /></button>
                <button className='mr-10 flex'><FaRegThumbsUp /><span className='text-lg ml-2'>0</span></button>
                <button className='flex'><FaRegCommentDots /><span className='text-lg ml-2'>0</span></button>
            </div>
            <Tabs onSelect={0, 2} className='border-t-2 border-b-2'>
                <TabList className='flex justify-center mt-10 p-4'>
                <Tab className='border-b-4 border-blue-400 mr-6 py-4 px-6'>Coin Info</Tab>
                <Tab className='border-b-4 border-blue-400 mr-6 py-4 px-6'>Team</Tab>
                <Tab className='border-b-4 border-blue-400 mr-6 py-4 px-6'>Website</Tab>
                </TabList>
            
                <TabPanel selectedTabPanelClassName='tab-panel border-b-2 border-blue-600'>
                    <CoinInfo coin={coin}/>
                </TabPanel>
                <TabPanel selectedTabPanelClassName='border-b-2 border-blue-600'>
                    <Team coin={coin}/>
                </TabPanel>
                <TabPanel selectedTabPanelClassName='border-b-2 border-blue-600'>
                    <Website coin={coin}/>
                </TabPanel>
            </Tabs>
            {/* <div>
                <div className="links">
                    <NavLink to={`${path}/coin-info`} className="link">Coin Info</NavLink>
                    <NavLink to={`${path}/team`} className="link">Team</NavLink>
                    <NavLink to={`${path}/website`} className="link">Website</NavLink>
                </div>
                <div className="tabs">
                    <Switch>
                        <Route path={`${path}/coin-info`} exact component={CoinInfo} />
                        <Route path={`${path}/team`} component={Team} />
                        <Route path={`${path}/website`} component={Website} />
                    </Switch>
                </div>
            </div> */}
            {/* <div>
                <button onClick={() => <CoinInfo />}>Coin Info</button>
                <button>Team</button>
                <button>Website</button>
            </div> */}
            {/* <div>
                <NavTab to="/coin-info">Coin Info</NavTab>
                <NavTab to="/team">Team</NavTab>
                <NavTab to="/website">Website</NavTab>

                <Switch>
                    <Route
                    exact
                    path={`/${match.params.id}/${match.path}`}
                    render={() => <Redirect replace to={`/${match.params.id}/${match.path}`} />}
                    />
                    <Route path={`/${match.params.id}/${match.path}`} component={CoinInfo} />
                    <Route path={`/${match.params.id}/${match.path}`} component={Team} />
                    <Route path={`/${match.params.id}/${match.path}`} component={Website} />
                </Switch>
            </div> */}
        </div>
    )

}

export default SingleCoin;