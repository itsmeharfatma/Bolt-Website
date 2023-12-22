import React from 'react';
import { boltFooterLogo } from '../assets/image/images';
import { footerLinks, socialMedia } from '../constants';
import { copyrightSign } from '../assets/icon/icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='min-container'>
      <div className='flex justify-between items-start gap-14 sm:gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <Link to='/'>
            <img 
              src={boltFooterLogo}
              alt='Footer Logo'
              width={150}
              height={46}
            />
          </Link>
          <p className='mt-2 sm:mt-3 text-sm leading-5 font-montserrat text-white-400 sm:max-w-sm'>
            Get Shoes ready for the new term at your nearest Bolt store. Get Rewards
          </p>
          <div className='flex items-center gap-4 mt-4'>
            {socialMedia.map((icon) => (
              <div className='flex justify-center items-center w-8 h-8 bg-white rounded-full cursor-pointer'>
                <img 
                  src={icon.src}
                  alt={icon.alt}
                  width={21}
                  height={21}
                />
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-1 justify-between lg:gap-10 gap-14 flex-wrap'>
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className='text-white font-montserrat text-lg leading-normal font-medium mb-4'>{section.title}</h4>
              <ul>
                {section.links.map((link) => (
                  <li className='mt-2 text-white-400 font-montserrat text-sm leading-normal hover:text-slate-gray cursor-pointer' key={link.name}>
                    <a href='/'>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      <div className='flex justify-between text-white-400 text-xs mt-20 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-1 font-montserrat cursor-pointer'>
          <img 
            src={copyrightSign}
            alt='Copyright Logo'
            width={16}
            height={16}
            className='rounded-full m-0'
          />
          <p className='mt-0.5'>Copyright. All rights reserved.</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer;