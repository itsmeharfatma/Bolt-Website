import React, { useState } from 'react';
import { boltHeaderLogo } from '../assets/image/images';
import { navLinks } from '../constants/index';
import Button from './Button';
import { Link } from 'react-router-dom';

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

                <ul className={`lg:flex lg:flex-1 lg:justify-center lg:space-x-10 lg:items-center lg:py-0 py-8 absolute lg:static lg:px-0 px-4  ${open ? 'top-24 left-5 space-y-4 bg-white w-[88%] h-64 shadow-xl' : 'top-[-490px]'}`}>
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                                {item.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <Link to='/signUp' className='font-montserrat leading-normal text-lg text-slate-gray lg:hidden'>
                            Sign Up
                        </Link>
                    </li>
                </ul>

                <Link to='/' className='hidden lg:block'>
                    <Button label="Sign Up" />
                </Link>

                {/* Hamburger-Menu-Icon */}
                <div onClick={() => setOpen(!open)} className='absolute right-8 top-[53px] cursor-pointer lg:hidden w-7 h-7'>
                    {open ? <i class="fa-solid fa-xmark fa-2xl"></i> : <i class="fa-solid fa-bars fa-2xl"></i>}
                </div>
            </nav>
        </header>
    );
}

export default Navbar;