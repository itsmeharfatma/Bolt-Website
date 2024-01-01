import React, { useContext } from 'react';
import { products } from '../constants';
import { ShopContext } from '../context/ShopContextProvider';
import { boltHeaderLogo } from '../assets/image/images';
import { arrowRight } from '../assets/icon/icons';
import CartItems from '../Components/CartItems';
import Button from '../Components/Button';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  return (
    <motion.section className='relative min-container my-14' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.1 } }}>
      <div className='fixed top-0 left-0 right-0 px-20 pt-6 pb-3 bg-white flex flex-1 justify-between items-center shadow'>
        <Link to='/'>
          <img
            src={boltHeaderLogo}
            alt='Logo'
            width={130}
            height={29}
          />
        </Link>
        <Link to='/products'>
          <Button label="Continue shopping" />
        </Link>
      </div>
      <div className='mt-36 flex justify-center items-start max-md:flex-col sm:gap-28 gap-8 w-full'>
        {totalAmount > 0 ? (
          <>
            <div className='flex flex-1 flex-col'>
              <h1 className=' text-4xl font-palanquin font-bold'>
                Your <span className='text-coral-red'>Cart</span> Items
              </h1>
              <p className='md:max-w-xl font-montserrat text-lg leading-7 text-green-600 mt-4'>
                <span><i class="fa-solid fa-circle-check fa-lg" style={{ color: "#00c24a" }}></i> </span>
                Your order is eligible for <span className='font-semibold'>Free</span> Delivery.
              </p>
              <div className='flex justify-start flex-wrap py-2 items-center gap-4'>
                {products.map((product) => {
                  if (cartItems[product.id] !== 0) {
                    return <CartItems data={product} />
                  }
                })}
              </div>
            </div>

            <div className='flex flex-1 justify-center items-center'>
              <div className='mt-28 flex flex-col gap-4'>
                <p className='text-xl font-montserrat leading-normal font-semibold'>Subtotal: <span className='text-coral-red'>${totalAmount}</span></p>
                <div>
                  <Button label="Proceed to Buy" iconURL={arrowRight} />
                </div>
              </div>
            </div>
          </>
        ) : (<h1 className='mt-60 text-3xl font-palanquin font-semibold text-coral-red'>Your Shopping Cart Is Empty..!
        </h1>)
        }
      </div>
    </motion.section>
  )
}

export default Cart;