import React from 'react';

const Team = ({ coin }) => {
    return (
    <>
        <h1 className='flex justify-center items-center pb-4 mt-10 mb-6 text-3xl'>{`The ${ coin.name } Team`}</h1>
        {coin.team.map(t => {
            return (
                <div className=''>
                    <div className='flex flex-col items-center'>
                        <h3 className='text-xl text-gray-600 pb-6'>{t.name}<span className='pl-2 text-lg text-black'>{t.position}</span></h3>
                    </div>
                </div>
            )
        })}
    </>
    )
}

export default Team;