import React, {useContext} from 'react';
import { ShopContext } from '../context/ShopContextProvider';

const CartItems = (props) => {
    const { id, imgURL, name, price } = props.data;

    const { cartItems, addToCart, removeFromCart, updataCartItemCount } = useContext(ShopContext);

    return (
        <div>
            <img
                src={imgURL}
                alt={name}
                className='w-[220px] h-[220px]'
            />
            <h3 className='mt-0.5 font-semibold text-xl leading-normal font-palanquin'>{name}</h3>
            <p className='font-semibold font-montserrat text-coral-red text-base leading-normal'>${price}</p>
            <div>
                <button onClick={() => removeFromCart(id)}> <i class="fa-solid fa-circle-minus fa-lg" style={{ color: "#FF6454" }}></i> </button>
                <input className='text-center' value={cartItems[id]} onChange={(e) => updataCartItemCount(Number(e.target.value), id) } />
                <button onClick={ () => addToCart(id)}> <i class="fa-solid fa-circle-plus fa-lg" style={{ color: "#FF6454" }}></i> </button>
            </div>
        </div>
    )
}

export default CartItems;