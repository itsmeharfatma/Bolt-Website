import React, { useState } from 'react';
import { boltHeaderLogo } from '../assets/image/images';
// import { hamburger } from '../assets/icon/icons';
import { navLinks } from '../constants/index';
import Button from './Button';

const Navbar = () => {
    let [open, setOpen] = useState(false);

    return (
        <header className='px-8 sm:px-24 py-10 absolute z-10 w-full'>
            <nav className='flex justify-between items-center max-container'>
                <a href='/'>
                    <img
                        src={boltHeaderLogo}
                        alt='Logo'
                        width={130}
                        height={29}
                    />
                </a>
                {/* <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul> */}

                <div onClick={() => setOpen(!open)} className='absolute right-8 top-[53px] cursor-pointer lg:hidden w-7 h-7'>
                    { open ? <i class="fa-solid fa-xmark fa-2xl"></i> : <i class="fa-solid fa-bars fa-2xl"></i> }
                </div>

                <ul className={`lg:flex lg:justify-center lg:gap-16 lg:items-center lg:py-0 py-6 absolute lg:static lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:px-0 px-4 transition-all duration-0 ease-in ${open ? 'top-24 left-5 space-y-3 bg-white w-[88%] shadow-xl' : 'top-[-490px]'}`}>
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                                {item.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a href='#home' className='font-montserrat leading-normal text-lg text-slate-gray lg:hidden'>
                            Sign Up
                        </a>
                    </li>
                </ul>

                <a href='#home' className='hidden lg:block'>
                    <Button label="Sign Up" />
                </a>

                {/* <div className=''>
                    <img
                        src={hamburger}
                        alt='Hamburger-icon'
                        width={25}
                        height={25}
                    />
                </div> */}
            </nav>
        </header>
    );
}

export default Navbar;