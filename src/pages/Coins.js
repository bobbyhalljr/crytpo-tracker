import React from "react";
import { NavLink } from "react-router-dom";

import { FaSearchDollar } from 'react-icons/fa';

const Coins = ({ coins }) => {
  return (
    <>
      <div className="flex sticky top-0 bg-gray-200 p-4 justify-center relative">
        <div class="w-9/12">
          <label class="inline-block text-gray-700 text-sm font-bold" for="search">
            <FaSearchDollar className='text-3xl absolute top-0 right-0 mr-32 mt-6' />
          </label>
          <input class="shadow-lg border-2 appearance-none border rounded-full w-full py-2 px-6 text-lg text-gray-700 leading-normal focus:outline-none focus:shadow-outline" id="search" type="text" placeholder="Search for a cryptocurrency" />
        </div>
      </div>
      {coins.map(coin => {
        return (
          <div key={coin.id} className="bg-gray-200 pt-6">
            {/* coin card */}
            <div className="rounded-lg bg-white shadow-md p-10 mx-10">
              {/* title */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <h1 className="text-2xl font-bold mr-2">{coin.name}</h1>
                  <h3 className="text-lg text-gray-500 font-medium mr-2">
                    {coin.symbol}
                  </h3>
                </div>
                <div className="">
                  <p className="bg-blue-200 text-blue-500 text-md border-solid border border-blue-500 font-semibold rounded-lg px-2">{`rank  ${coin.rank}`}</p>
                </div>
              </div>
              {/* stats */}
              <div className="mt-10 flex flex-col items-center">
                <h3 className="text-gray-500 text-lg font-medium">
                  Market Cap
                </h3>
                <h1 className="text-xl">{`$ ${coin.quotes.USD.market_cap}`}</h1>
                <h3 className="mt-4 text-gray-500 text-lg font-medium">
                  Price
                </h3>
                <h1 className="text-xl">{`$ ${coin.quotes.USD.price.toFixed(
                  2
                )}`}</h1>
                <h3 className="mt-4 text-gray-500 text-lg font-medium">
                  Percent Change (1 hour)
                </h3>
                <h1 className="text-xl">{`${coin.quotes.USD.percent_change_1h} %`}</h1>
                <NavLink
                  to={`/${coin.id}`}
                  className="mt-6 bg-blue-500 text-md font-medium rounded-lg text-white text-center w-6/12 py-1"
                >
                  <button className="">{`View ${coin.name}`}</button>
                </NavLink>
              </div>
            </div>
          </div>
        );
      })}
    {/* </div> */}
    </>
  );
};

export default Coins;
