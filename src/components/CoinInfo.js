import React from 'react';

const CoinInfo = ({ coin }) => {
    return (
        <div className='mb-6'>
            <h1 className='flex justify-center items-center pb-4 mt-10 mb-6 text-3xl'>{`About ${ coin.name }`}</h1>
            <div className='flex flex-col items-center'>
                <h3 className='text-xl text-gray-600 pb-6'>Started On:<span className='pl-2 text-lg text-black'>{parseInt(coin.started_at)}</span></h3>
                <h3 className='text-xl text-gray-600 pb-6'>Oranization Structure:<span className='pl-2 text-lg text-black'>{coin.org_structure}</span></h3>
                <h3 className='text-xl text-gray-600 pb-6'>Proof Type:<span className='pl-2 text-lg text-black'>{coin.proof_type}</span></h3>
                <h3 className='text-xl text-gray-600 pb-6'>Hash Algorithm:<span className='pl-2 text-lg text-black'>{coin.hash_algorithm}</span></h3>
            </div>
        </div>
    )
}

export default CoinInfo;