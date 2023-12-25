import React, { useContext } from 'react';
import { products } from '../constants';
import { ShopContext } from '../context/ShopContextProvider';
import { boltHeaderLogo } from '../assets/image/images';
import CartItems from '../Components/CartItems';
import Button from '../Components/Button';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  return (
    <section className='relative min-container my-14 '>
      <div className='fixed top-0 left-0 right-0 px-20 pt-6 pb-3 bg-white flex flex-1 justify-between items-center  shadow'>
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
      <h1 className='mt-32 text-4xl font-palanquin font-bold'>Your <span className='text-coral-red'>Cart</span> Items</h1>

      <div className='flex justify-start flex-wrap py-6 items-center gap-4'>
        {products.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItems data={product} />
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className='flex flex-col gap-4'>
          <p className='text-xl font-montserrat leading-normal font-semibold'>Subtotal: ${totalAmount}</p>
          <div>
            <Button label="Buy now" />
          </div>
        </div>
      ) : (<h1 className='mt-16 text-3xl font-palanquin font-bold text-center text-coral-red'>Your Cart Is Empty..!
      </h1>)
      }

    </section>
  )
}

export default Cart;