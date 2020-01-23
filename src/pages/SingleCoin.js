import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { NavLink } from 'react-router-dom';
import { FaArrowLeft, FaRegStar, FaRegThumbsUp, FaRegCommentDots } from 'react-icons/fa'

const SingleCoin = ({ match, history }) => {
    const [coin, setCoin] = useState({
        team: [],
        whitepaper: {},
        links: {
            website: []
      }
    })

    const getCoin = match.params.id;

    useEffect(() => {
        axios.get(`https://api.coinpaprika.com/v1/coins/${getCoin}`)
        .then(res => {
            console.log(res.data)
            setCoin(res.data)
        })
        .catch(err => console.log(err))
    },[getCoin])

    return (
        <div className='mx-6'>
            <div className=''>
                <NavLink to={`/`} className=''>
                    <button className='flex items-center justify-center bg-blue-500 text-md w-40 font-medium p-2 m-4 text-white rounded-lg'><FaArrowLeft /> <span className='ml-2'>Back to coins</span></button>
                </NavLink>
            </div>
            <div className='flex items-center justify-center mt-12'>
                <h1 className='text-3xl font-bold mr-2'>{coin.name}</h1>
                <h1 className='text-xl font-medium text-gray-500'>{coin.symbol}</h1>
            </div>
            <h3 className='mt-4 text-gray-600 text-xl font-medium'>{coin.description}</h3>
            <div className='flex text-3xl justify-center mt-10 p-4'>
                <p className='mr-10 flex'><FaRegStar /> <span className='text-lg ml-2'>Favorite</span></p>
                <p className='mr-10 flex'><FaRegThumbsUp /><span className='text-lg ml-2'>0</span></p>
                <p className='flex'><FaRegCommentDots /><span className='text-lg ml-2'>0</span></p>
            </div>
        </div>
    )

}

export default SingleCoin;