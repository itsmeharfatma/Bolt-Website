import React from 'react';
import { products } from '../constants';
import PopularProductCard from '../Components/PopularProductCard';
import { boltHeaderLogo } from '../assets/image/images';
import { Link } from 'react-router-dom';
import Button from '../Components/Button';
import { ScrollRestoration } from "react-router-dom";

const Products = () => {
  return (
    <section className='min-container my-14'>
      <div className='flex flex-1 justify-between items-center mb-8'>
        <Link to='/'>
          <img
            src={boltHeaderLogo}
            alt='Logo'
            width={130}
            height={29}
          />
        </Link>
        <Link to='/cart'>
          <Button label="View cart" />
        </Link>
      </div>
      <div className='mt-5 grid lg:gird-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-10 gap-8'>
        {products.map((product) => (
          <PopularProductCard data={product} />
        ))}
      </div>
      
      <ScrollRestoration />
    </section>
  )
}

export default Products;