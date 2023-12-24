import React, { useContext } from 'react';
import { star } from '../assets/icon/icons';
import { ShopContext } from '../context/ShopContextProvider';

const PopularProductCard = (props) => {

    const { id, imgURL, name, price } = props.data;

    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemNumber = cartItems[id];

    return (
        <div className='flex flex-1 flex-col w-full max-sm:w-full'>
            <img
                src={imgURL}
                alt={name}
                className='w-[226px] h-[226px]'
            />

            <div className='mt-3 flex items-center justify-between'>
                <div className='flex items-center gap-1'>
                    <img
                        src={star}
                        alt='rating'
                        width={16}
                        height={16}
                    />
                    <p className='mt-0.5 font-montserrat text-xs leading-normal text-slate-gray'>
                        (4.5)
                    </p>
                </div>

                <button onClick={() => addToCart(id)} className='flex items-center gap-1 cursor-pointer mr-0.5'>
                    <i class="fa-solid fa-cart-shopping" style={{ color: "#FF6454" }}></i> {cartItemNumber > 0 && <> <p className='font-montserrat text-sm leading-normal text-slate-gray'>({cartItemNumber})</p> </>}
                </button>

            </div>
            <h3 className='mt-0.5 font-semibold text-xl leading-normal font-palanquin'>{name}</h3>
            <p className='font-semibold font-montserrat text-coral-red text-base leading-normal'>${price}</p>
        </div>
    )
};

export default PopularProductCard;