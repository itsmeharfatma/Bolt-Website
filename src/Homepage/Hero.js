import { React, useState } from 'react';
import Button from '../Components/Button';
import ShoeCard from '../Components/ShoeCard';
import { arrowRight } from '../assets/icon/icons';
import { statistics, shoes } from '../constants';
import { bigShoe1 } from '../assets/image/images';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)

  return (
    <section id='home' className='w-full flex lg:flex-row flex-col justify-center min-h-screen gap-10 max-container'>
      <div className='relative lg:w-[45%] flex flex-col justify-center items-start w-full max-xl:padding-x pt-24 sm:pt-32'>
        <p className='text-xl font-montserrat text-coral-red'>
          Our Brand New Collection
        </p>
        <h1 className='sm:mt-6 mt-4 font-palanquin text-[72px] leading-[74px] max-sm:text-[64px] max-sm:leading-[66px] font-bold'>
          <span className='lg:bg-white lg:whitespace-nowrap relative md:z-10 pr-6'>The New Arrival</span>
          <br />
          <span className='text-coral-red inline-block mt-1.5 sm:mt-3'>Bolt</span> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-7 mt-6 mb-7 sm:mt-7 sm:mb-10 sm:max-w-sm'>
          Discover stylish Bolt arrivals, quality comfort, and innovation for your active life.
        </p>

        <Link to='/products'>
          <Button label="Shop now" iconURL={arrowRight} />
        </Link>

        <div className='flex justify-start items-start flex-wrap w-full mt-9 gap-8 sm:mt-10 sm:gap-12'>
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center lg:min-h-screen max-lg:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          className='object-contain relative z-10'
          src={bigShoeImg}
          alt='shoe collection'
          width={480}
          height={502}
        />

        <div className='flex
         sm:gap-6 gap-4 absolute -bottom-[5%] lg:-bottom-[8%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((shoe) => (
            <div key={shoe}>
               <ShoeCard 
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
               />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero