import React from 'react';
import { star } from '../assets/icon/icons';

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className='flex justify-center items-center flex-col'>
        <img 
            src={imgURL}
            alt='customer'
            className='rounded-full object-cover w-[80px] h-[80px]'
        />
        <p className='mt-3 max-w-sm text-center font-montserrat text-slate-gray text-sm'>
            {feedback}
        </p>
        <div className='mt-2 flex justify-center items-center gap-1'>
            <img 
                src={star}
                alt='star'
                width={18}
                height={18}
                className='object-contain m-0'
            />
            <p className='mt-0.5 text-sm font-montserrat text-slate-gray'>({rating})</p>
        </div>
        <h3 className='mt-2 font-palanquin text-lg text-center font-bold'>{customerName}</h3>
    </div>
  )
}

export default ReviewCard;