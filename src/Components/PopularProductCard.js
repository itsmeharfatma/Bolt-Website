import React from 'react';
import { star } from '../assets/icon/icons';

const PopularProductCard = ({ imgURL, name, price }) => {
    return (
        <div className='flex flex-1 flex-col w-full max-sm:w-full'>
            <img
                src={imgURL}
                alt={name}
                className='w-[220px] h-[220px]'
            />

            <div className='mt-3 flex items-center justify-start gap-1'>
                <img
                    src={star}
                    alt='rating'
                    width={16}
                    height={16} 
                />
                <p className='mt-0.5 font-montserrat text-xs leading-normal text-slate-gray'>
                    (4.5)
                </p>
            </div>
            <h3 className='mt-0.5 font-semibold text-xl leading-normal font-palanquin'>{name}</h3>
            <p className='font-semibold font-montserrat text-coral-red text-base leading-normal'>{price}</p>
        </div>
    )
}

export default PopularProductCard;