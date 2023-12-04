import React from 'react';
import { star } from '../assets/icon/icons';

const PopularProductCard = ({ imgURL, name, price }) => {
    return (
        <div className='flex flex-1 flex-col w-full max-sm:w-full'>
            <img
                src={imgURL}
                alt={name}
                className='w-[240px] h-[240px]'
            />

            <div className='mt-4 flex items-center justify-start gap-1'>
                <img
                    src={star}
                    alt='rating'
                    width={22}
                    height={22} 
                />
                <p className='mt-1 font-montserrat text-lg leading-normal text-slate-gray'>
                    (4.5)
                </p>
            </div>
            <h3 className='mt-1 font-semibold text-2xl leading-normal font-palanquin'>{name}</h3>
            <p className='mt-1 font-semibold font-montserrat text-coral-red text-xl leading-normal'>{price}</p>
        </div>
    )
}

export default PopularProductCard;