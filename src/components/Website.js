import React from 'react';

const Website = ({ coin }) => {
    return (
    <>
        {coin.links.website.map(website => {
            return (
                <div className='mt-6'>
                    <div className='flex flex-col items-center'>
                        <h3 className='text-xl text-gray-600 pb-6'>Website:<a href={`${website}`} className='pl-2 text-lg text-blue-500'>{website}</a></h3>
                    </div>
                </div>
            )
        })}
    </>
    )
}

export default Website;