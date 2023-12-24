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
        <Link to='/products'><Button label="Continue shopping" /></Link>
      </div>
      <h1 className='text-4xl font-palanquin font-bold'>Your <span className='text-coral-red'>Cart</span> Items</h1>

      <div className='justify-center'>
        {products.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItems data={product} />
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className='flex flex-col gap-8'>
          <p className='text-xl font-montserrat leading-normal font-semibold'>Subtotal: ${totalAmount}</p>
          <div>
            <Button label="Checkout" />
          </div>
        </div>
      ) : (<h1 className='text-4xl font-palanquin font-bold text-center'>Your <span className='text-coral-red'>Cart</span> Is Empty.
      </h1>)
      }

    </section>
  )
}

export default Cart;