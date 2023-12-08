import React from 'react';

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className='flex flex-col sm:w-[340px] sm:min-w-[340px] sm:h-[232px] sm:min-h-[232px] rounded-xl shadow-3xl px-8 py-8'>
        <div className='flex w-11 h-11 justify-center items-center bg-coral-red rounded-full'>
            <img 
                src={imgURL} 
                alt={label}
                width={24}
                height={24}
            />
        </div>
        <h3 className='mt-2 font-palanquin text-2xl leading-normal font-bold'>
            {label}
        </h3>
        <p className='mt-2 break-words font-montserrat text-mg leading-normal text-slate-gray'>
            {subtext}
        </p>
    </div>
  )
}

export default ServiceCard;