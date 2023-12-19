import React from 'react';
import Button from '../Components/Button';
import { shoe8 } from '../assets/image/images';

const SuperQuality = () => {
  return (
    <section id='about-us' className='flex justify-center items-center max-md:flex-col sm:gap-8 gap-8 w-full min-container'>
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          We Provide You
          <span className='text-coral-red'> Super </span>
          <span className='text-coral-red'>Quality </span>Shoes
        </h2>
        <p className='mt-4 md:max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you unmatched quality, innovation, and a touch of elegance.
        </p>
        <p className='mt-2 md:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction.
        </p>

        <div className='mt-5'>
          <Button label="View details" />
        </div>
      </div>

      <div className='flex flex-1 justify-center items-center'>
        <img
          src={shoe8}
          alt='Shoe8'
          width={360}
          height={500}
          className='object-contain' 
        />
      </div>
    </section>
  )
}

export default SuperQuality;