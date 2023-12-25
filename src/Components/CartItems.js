import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContextProvider';

const CartItems = (props) => {
    const { id, imgURL, name, price } = props.data;

    const { cartItems, addToCart, removeFromCart, updataCartItemCount } = useContext(ShopContext);

    return (
        <div className='flex flex-row justify-center items-center gap-12 rounded-xl shadow-xl px-6 py-6 sm:w-[600px]'>
            <img
                src={imgURL}
                alt={name}
                className='w-[220px] h-[220px]'
            />

            <div>
                <h3 className='font-semibold text-2xl leading-normal font-palanquin'>{name}</h3>
                <p className='font-semibold font-montserrat text-coral-red text-base leading-normal'>
                    <span className='text-black font-palanquin'>MRP: </span>${price}
                </p>
                <p className='text-xs text-slate-gray leading-normal font-palanquin'>
                    Eligible fro Free Shipping
                </p>
                <p className='text-xs text-green-600 leading-normal font-palanquin mt-6'>
                    In stock
                </p>
                <p className='text-base font-bold leading-normal font-palanquin'>
                    Size: <span className='font-semibold text-gray-500 font-montserrat'>5 UK</span>
                </p>
                <p className='text-base font-bold leading-normal font-palanquin'>
                    Colour: <span className='font-semibold text-gray-500 font-palanquin'>Black</span>
                </p>

                <div className='flex gap-1 mt-2'>
                    <button onClick={() => removeFromCart(id)}> <i class="fa-solid fa-circle-minus fa-xl" style={{ color: "#FF6454" }}></i> </button>

                    <input className='text-center border rounded-full w-16 font-montserrat leading-normal font-semibold' value={cartItems[id]} onChange={(e) => updataCartItemCount(Number(e.target.value), id)} />

                    <button onClick={() => addToCart(id)}> <i class="fa-solid fa-circle-plus fa-xl" style={{ color: "#FF6454" }}></i> </button>
                </div>
            </div>
        </div>
    )
}

export default CartItems;