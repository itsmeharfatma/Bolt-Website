import React from 'react';
import Button from '../Components/Button';

const Subscribe = () => {
  return (
    <section id='contact-us' className='min-container flex justify-between items-center max-md:flex-col gap-10'>
      <h3 className='text-4xl leading-[52px] md:max-w-md font-palanquin font-bold'>
        Sign Up For
        <span className='text-coral-red'> Updates </span>
        & Newsletter
      </h3>
      <div className='md:max-w-[45%] w-full flex items-center max-sm:flex-col gap-5 p-1.5 sm:border sm:border-slate-gray rounded-full'>
        <input type='text'
          placeholder='subscribe@bolt.com'
          className='input' />
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <Button
            label="Sign Up"
            fullWidth
          />
        </div>
      </div>
    </section>
  )
}

export default Subscribe;