import React from 'react';
import { products } from '../constants';
import PopularProductCard from '../Components/PopularProductCard';
import Button from '../Components/Button';
import { arrowRight } from '../assets/icon/icons';
import { Link } from 'react-router-dom';

const PolularProducts = () => {
  return (
    <section id='products' className='min-container'>
      <div className='flex flex-col justify-start gap-4'>
        <h2 className='text-4xl font-palanquin font-bold'>
          Our <span className='text-coral-red'>Popular</span> Products
        </h2>
        <p className='md:max-w-xl info-text'>
          Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value
        </p>
      </div>

      <div className='mt-5 grid lg:gird-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-10 gap-8'>
        {products.slice(0, 4).map((product) => (
          <PopularProductCard data={product} />
        ))}
      </div>

      <div className='mt-10 sm:mt-6 flex flex-wrap gap-4'>
        <Link to='/products'>
          <Button label="View more"/>
        </Link>
        <Link to='/cart'>
          <Button
            label="View cart"
            backgroundColor="bg-pale-blue"
            borderColor="border border-slate-gray"
            textColor="text-slate-gray"
          />
        </Link>
      </div>
    </section>
  )
}

export default PolularProducts;