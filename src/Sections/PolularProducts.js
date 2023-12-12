import React from 'react';
import { products } from '../constants';
import PopularProductCard from '../Components/PopularProductCard';

const PolularProducts = () => {
  return (
    <section id='products' className='min-container'>
      <div className='flex flex-col justify-start gap-4'>
        <h2 className='text-4xl font-palanquin font-bold'>
          Our <span className='text-coral-red'>Polular</span> Products
        </h2>
        <p className='lg:max-w-md mt-2 font-montserrat text-slate-gray'>
          Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value
        </p>
      </div>

      <div className='mt-8 grid lg:gird-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-8'>
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  )
}

export default PolularProducts;