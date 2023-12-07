import React from 'react';

const Button = ({ label, iconURL }) => {
    return (
        <button className='flex justify-center items-center gap-2 px-5 py-3 font-montserrat text-lg leading-none rounded-full text-white bg-coral-red border-coral-red'>
            {label}

            {iconURL && <img
                src={iconURL}
                alt='arrow rigth icon'
                className='ml-2 rounded-full w-5 h-5'
            />}
        </button>
    )
}

export default Button;