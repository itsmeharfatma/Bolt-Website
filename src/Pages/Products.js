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
      <div className='fixed max-sm:h-[78px] top-0 left-0 right-0 flex flex-1 justify-between items-center bg-white lg:px-20 lg:pt-6 lg:pb-3 shadow px-6 pt-3 pb-2'>
        <Link to='/' className='max-md:hidden'>
          <img
            src={boltHeaderLogo}
            alt='Logo'
            width={130}
            height={29}
          />
        </Link>
        <div className='rounded-full py-2 px-3 shadow md:hidden'>
          <Link to='/'>
            <button><i class="fa-solid fa-chevron-left fa-xl" style={{ color: "#FF6454" }}></i></button>
            {/* <button><i class="fa-solid fa-arrow-left fa-xl" style={{ color: "#FF6454" }}></i></button> */}
          </Link>
        </div>
        <Link to='/cart' className='max-md:hidden'>
          <Button label="View cart" />
        </Link>
        <div className='flex flex-row justify-center items-center space-x-4 md:hidden mt-2'>
          {/* <Link to='/'>
            <button><i class="fa-solid fa-house fa-lg" style={{ color: "#FF6454" }}></i></button>
          </Link> */}
          <Link to='/cart'>
            <div className='flex flex-col'>
              <button><i class="fa-solid fa-cart-shopping fa-lg" style={{ color: "#FF6454" }}></i></button>
              <p className='font-palanquin text-xs ml-0.5'>Cart</p>
            </div>
          </Link>
          <div className='flex flex-col'>
            <button><i class="fa-solid fa-user fa-lg" style={{ color: "#FF6454" }}></i></button>
            <p className='font-palanquin text-xs'>You</p>
          </div>
        </div>
      </div>
      <div className='mt-[104px] px-8 lg:mt-36 lg:px-0'>
        <h1 className='text-3xl sm:text-4xl font-palanquin font-bold'>
          Our <span className='text-coral-red'>Super Quality</span> Products
        </h1>
        <p className='md:max-w-xl font-montserrat text-base sm:text-lg sm:leading-7 leading-6 text-slate-gray mt-2 sm:mt-4'>
          Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value
        </p>
        <div className='mt-4 sm:mt-6 grid lg:gird-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-10 gap-8'>
          {products.map((product) => (
            <PopularProductCard data={product} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Products;