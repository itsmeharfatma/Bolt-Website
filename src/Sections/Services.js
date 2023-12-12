import React from 'react';
import { services } from '../constants';
import ServiceCard from '../Components/ServiceCard';

const Services = () => {
  return (
    <section className='min-container'>
      <h2 className='text-4xl font-palanquin font-bold'>
        Our <span className='text-coral-red'>Services</span>
      </h2>
      <div className='flex flex-wrap justify-center mt-6 gap-9'>
        {services.map((service) => (
          <ServiceCard key={service.label} {...service} />
        ))}
      </div>
    </section>
  )
}

export default Services;