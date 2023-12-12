import React from 'react';
import { boltHeaderLogo } from '../assets/image/images';
import { hamburger } from '../assets/icon/icons';
import { navLinks } from '../constants/index';

const Navbar = () => {
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
                <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className='hidden max-lg:block'>
                    <img
                        src={hamburger}
                        alt='Hamburger-icon'
                        width={25}
                        height={25}
                    />
                </div>
            </nav>
        </header>
    )
}

export default Navbar;