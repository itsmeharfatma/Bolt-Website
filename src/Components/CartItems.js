import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContextProvider';

const CartItems = (props) => {
    const { id, imgURL, name, price } = props.data;

    const { cartItems, addToCart, removeFromCart, updataCartItemCount } = useContext(ShopContext);

    return (
        <div className='flex flex-row justify-center items-center gap-8 rounded-xl shadow-xl px-6 py-6 my-8 sm:w-[600px]'>
            <img
                src={imgURL}
                alt={name}
                className='w-[220px] h-[220px]'
            />

            <div>
                <h3 className='mt-0.5 font-semibold text-2xl leading-normal font-palanquin'>{name}</h3>
                <p className='font-semibold font-montserrat text-coral-red text-lg leading-normal'>${price}</p>

                <div className='mt-8 flex gap-1'>
                    <button onClick={() => removeFromCart(id)}> <i class="fa-solid fa-circle-minus fa-xl" style={{ color: "#FF6454" }}></i> </button>

                    <input className='text-center border rounded-full w-16 font-montserrat leading-normal font-semibold' value={cartItems[id]} onChange={(e) => updataCartItemCount(Number(e.target.value), id)} />

                    <button onClick={() => addToCart(id)}> <i class="fa-solid fa-circle-plus fa-xl" style={{ color: "#FF6454" }}></i> </button>
                </div>
            </div>
        </div>
    )
}

export default CartItems;