import React from 'react';

const CustomerCard = ({ imgURL, review, name }) => {
    return (
        <div className='w-96 h-96 bg-[#6D6B7B] rounded-3xl shadow-xl shadow-[#6D6B7B] p-9 justify-center items-center transform transition-transform hover:scale-105 border-2'>
            <div className='flex justify-start items-center'>
                <img src={imgURL} className='w-10 h-10 mt-4 mb-2' alt={name} />
            </div>
            <div className='px-10'>
                <h3 className='text-base text-[Quattrocento Sans] text-[#FFFFFF]'>{review}</h3>
                <p className='text-[#FFFFFF] text-[Montserrat] text-2xl py-10'>{name}</p>
            </div>
        </div>
    );
}

export default CustomerCard;
