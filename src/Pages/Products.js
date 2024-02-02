import React from 'react';
import { products } from '../constants';
import PopularProductCard from '../Components/PopularProductCard';
import { boltHeaderLogo } from '../assets/image/images';
import { Link } from 'react-router-dom';
import Button from '../Components/Button';
import { motion } from "framer-motion";

const Products = () => {
  return (
    <motion.section className='relative min-container my-14' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.1 } }}>
      <div className='fixed max-sm:h-[62px] top-0 left-0 right-0 flex flex-1 justify-between items-center bg-white lg:px-20 lg:pt-6 lg:pb-3 shadow px-4 py-2 '>
        <Link to='/' className='max-md:hidden'>
          <img
            src={boltHeaderLogo}
            alt='Logo'
            width={110}
            height={29}
          />
        </Link>
        <div className='rounded-full py-1.5 px-2.5 shadow md:hidden'>
          <Link to='/products'>
            <button><i class="fa-solid fa-chevron-left fa-xl" style={{ color: "#FF6454" }}></i></button>
            {/* <button><i class="fa-solid fa-arrow-left fa-xl" style={{ color: "#FF6454" }}></i></button> */}
          </Link>
        </div>
        <Link to='/cart' className='max-md:hidden'>
          <Button label="View cart" />
        </Link>
        <div className='space-x-3 md:hidden'>
          {/* <Link to='/'>
            <button><i class="fa-solid fa-house fa-lg" style={{ color: "#FF6454" }}></i></button>
          </Link> */}
          <Link to='/cart'>
            <button><i class="fa-solid fa-cart-shopping fa-lg" style={{ color: "#FF6454" }}></i></button>
          </Link>
          <>
            <button><i class="fa-solid fa-user fa-lg" style={{ color: "#FF6454" }}></i></button>
          </>
        </div>
      </div>
      <div className='lg:mt-36 mt-32 px-8 lg:px-0'>
        <h1 className='text-4xl font-palanquin font-bold'>
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
      </div>
    </motion.section>
  )
}

export default Products;