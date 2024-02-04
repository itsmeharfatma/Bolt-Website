import React, { useContext } from 'react';
import { star } from '../assets/icon/icons';
import { ShopContext } from '../context/ShopContextProvider';

const PopularProductCard = (props) => {

    const { id, imgURL, name, price } = props.data;

    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemNumber = cartItems[id];

    return (
        <div className='flex flex-1 flex-col w-full max-md:w-56'>
            <img
                src={imgURL}
                alt={name}
                className='w-[224px] h-[226px]'
            />
            <div className='mt-2 sm:mt-3 flex items-center justify-between'>
                <h3 className='font-semibold text-xl leading-normal font-palanquin'>{name}</h3>
                <div className='flex items-center gap-1'>
                    <img
                        src={star}
                        alt='rating'
                        width={15}
                        height={15}
                    />
                    <p className='mt-0.5 font-montserrat text-xs leading-normal text-slate-gray'>
                        (4.5)
                    </p>
                </div>
            </div>
            <p className='font-semibold font-montserrat text-coral-red text-base leading-normal'>
                <span className='text-black font-palanquin'>MRP:</span> ${price}
            </p>
            <button onClick={() => addToCart(id)} className='flex rounded-full justify-center bg-[#ffd426] border-2 border-[#ffc926] mt-2 py-1 items-center gap-1.5 cursor-pointer'>
                <p className='font-semibold font-montserrat text-base leading-normal'>Add to cart</p> {cartItemNumber > 0 && <> <p className='font-montserrat text-xs leading-normal'>({cartItemNumber})</p> </>}
            </button>
        </div>
    )
};

export default PopularProductCard;