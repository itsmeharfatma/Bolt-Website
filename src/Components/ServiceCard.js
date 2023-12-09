import React from 'react';

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className='flex flex-col sm:w-[315px] sm:min-w-[315px] sm:h-[180px] sm:min-h-[180px] rounded-xl shadow-3xl px-8 py-8'>
        <div className='flex w-9 h-9 justify-center items-center bg-coral-red rounded-full'>
            <img 
                src={imgURL} 
                alt={label}
                width={21}
                height={21}
            />
        </div>
        <h3 className='mt-1 font-palanquin text-xl leading-normal font-bold'>
            {label}
        </h3>
        <p className='mt-1 break-words font-montserrat text-sm leading-normal text-slate-gray'>
            {subtext}
        </p>
    </div>
  )
}

export default ServiceCard;