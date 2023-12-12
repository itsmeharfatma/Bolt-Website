import React from 'react';
import { boltFooterLogo } from '../assets/image/images';
import { footerLinks, socialMedia } from '../constants';
import { copyrightSign } from '../assets/icon/icons';

const Footer = () => {
  return (
    <footer className='min-container'>
      <div className='flex justify-between items-start gap-14 sm:gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <a href='/'>
            <img 
              src={boltFooterLogo}
              alt='Footer Logo'
              width={150}
              height={46}
            />
          </a>
          <p className='mt-3 sm:mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
            Get Shoes ready for the new term at your nearest Bolt store. Get Rewards
          </p>
          <div className='flex items-center gap-5 mt-5'>
            {socialMedia.map((icon) => (
              <div className='flex justify-center items-center w-9 h-9 bg-white rounded-full cursor-pointer'>
                <img 
                  src={icon.src}
                  alt={icon.alt}
                  width={22}
                  height={22}
                />
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-1 justify-between lg:gap-10 gap-14 flex-wrap'>
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className='text-white font-montserrat text-xl leading-normal font-medium mb-4'>{section.title}</h4>
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
      
      <div className='flex justify-between text-white-400 text-sm mt-20 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-1 font-montserrat cursor-pointer'>
          <img 
            src={copyrightSign}
            alt='Copyright Logo'
            width={18}
            height={18}
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