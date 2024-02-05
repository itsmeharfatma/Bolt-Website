import React, { useContext } from 'react';
import { products } from '../constants';
import { ShopContext } from '../context/ShopContextProvider';
import { boltHeaderLogo, shoppingCart } from '../assets/image/images';
import { arrowRight } from '../assets/icon/icons';
import CartItems from '../Components/CartItems';
import Button from '../Components/Button';
import { Link } from 'react-router-dom';
import { ScrollRestoration } from "react-router-dom";
import { motion } from "framer-motion";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  return (
    <motion.section className='relative min-container my-14' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.1 } }}>
      <div className='fixed max-sm:h-[78px] top-0 left-0 right-0 bg-white flex flex-1 justify-between shadow items-center px-6 pt-3 pb-2 lg:px-20 lg:pt-6 lg:pb-3'>
        <Link to='/' className='max-md:hidden'>
          <img
            src={boltHeaderLogo}
            alt='Logo'
            width={130}
            height={29}
          />
        </Link>
        <div className='rounded-full py-2 px-3 shadow md:hidden'>
          <Link to='/products'>
            <button><i class="fa-solid fa-chevron-left fa-xl" style={{ color: "#FF6454" }}></i></button>
            {/* <button><i class="fa-solid fa-arrow-left fa-xl" style={{ color: "#FF6454" }}></i></button> */}
          </Link>
        </div>
        <Link to='/products' className='max-md:hidden'>
          <Button label="Continue shopping" />
        </Link>
        <div className='flex flex-row justify-center items-center space-x-3 md:hidden mt-2'>
          <Link to='/'>
            <div className='flex flex-col'>
              <button><i class="fa-solid fa-house fa-lg" style={{ color: "#FF6454" }}></i></button>
              <p className='font-palanquin text-xs'>Home</p>
            </div>
          </Link>
          <div className='flex flex-col'>
            <button><i class="fa-solid fa-user fa-lg" style={{ color: "#FF6454" }}></i></button>
            <p className='font-palanquin text-xs'>You</p>
          </div>
        </div>
      </div>
      <div className='mt-[104px] sm:mt-36 px-8 lg:px-0 flex justify-center items-start max-md:flex-col sm:gap-28 w-full'>
        {totalAmount > 0 ? (
          <>
            <div className='flex flex-1 flex-col'>
              <h1 className='text-3xl sm:text-4xl font-palanquin font-bold'>
                Your <span className='text-coral-red'>Cart</span> Items
              </h1>
              <p className='md:max-w-xl font-montserrat text-base sm:text-lg leading-7 text-green-600 mt-1 sm:mt-4'>
                <span><i class="fa-solid fa-circle-check fa-lg" style={{ color: "#00c24a" }}></i> </span>
                Your order is eligible for <span className='font-semibold'>Free</span> Delivery.
              </p>
              <div className='flex justify-center flex-wrap py-0 sm:py-2 items-center gap-4'>
                {products.map((product) => {
                  if (cartItems[product.id] !== 0) {
                    return <CartItems data={product} />
                  }
                })}
              </div>
            </div>

            <div className='flex flex-1 justify-center items-center'>
              <div className='mt-12 sm:mt-28 flex flex-col gap-1.5 sm:gap-2.5'>
                <p className='text-lg sm:text-xl font-montserrat leading-normal font-semibold ml-0.5'>Subtotal: <span className='text-coral-red'>${totalAmount}</span></p>
                <div>
                  <Button label="Proceed to Buy" iconURL={arrowRight} />
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className='flex flex-col'>
            <img
              src={shoppingCart}
              alt='shopping-cart illustration'
              width={350}
              height={29}
              className='mt-28 md:mt-10'
            />
            <h1 className='text-2xl text-center mt-2 font-montserrat font-semibold'>Your <span className='text-coral-red'>Shopping Cart</span> Is Empty..!</h1>

          </div>
        )
        }
      </div>

      <ScrollRestoration />

    </motion.section>
  )
}

export default Cart;