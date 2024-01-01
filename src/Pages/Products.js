import React from 'react';
import { products } from '../constants';
import PopularProductCard from '../Components/PopularProductCard';
import { boltHeaderLogo } from '../assets/image/images';
import { Link } from 'react-router-dom';
import Button from '../Components/Button';
// import { ScrollRestoration } from "react-router-dom";
import { motion } from "framer-motion"

const Products = () => {
  return (
    <motion.section className='relative min-container my-14' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: {duration: 0.1} }}>
      <div className='fixed top-0 left-0 right-0 flex flex-1 justify-between items-center bg-white px-20 pt-6 pb-3 shadow'>
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
      <h1 className='mt-36 text-4xl font-palanquin font-bold'>
        Our <span className='text-coral-red'>Super Quality</span> Products
      </h1>
      <p className='md:max-w-xl info-text mt-4'>
        Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value
      </p>
      <div className='mt-6 grid lg:gird-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-10 gap-8'>
        {products.map((product) => (
          <PopularProductCard data={product} />
        ))}
      </div>

      {/* <ScrollRestoration /> */}
    </motion.section>
  )
}

export default Products;