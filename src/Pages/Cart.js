import React, { useContext } from 'react';
import { products } from '../constants';
import { ShopContext } from '../context/ShopContextProvider';
import CartItems from '../Components/CartItems';
import Button from '../Components/Button';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  return (
    <section className='min-container my-14'>
      <h1 className='text-4xl font-palanquin font-bold text-center'>Your <span className='text-coral-red'>Cart</span> Items</h1>

      <div>
        {products.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItems data={product} />
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className='flex gap-4'>
          <p>Subtotal: ${totalAmount}</p>
          <Link to='/products'><Button label="Continue shopping" /></Link>
          <Button label="Checkout" />
        </div>
      ) : (<h1 className='text-4xl font-palanquin font-bold text-center'>Your <span className='text-coral-red'>Cart</span> Is Empty.
      </h1>)
      }

    </section>
  )
}

export default Cart;