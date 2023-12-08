import React from 'react';
import { services } from '../constants';
import ServiceCard from '../Components/ServiceCard';

const Services = () => {
  return (
    <section className='max-container flex flex-wrap justify-center gap-6 md:pl-8'>
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  )
}

export default Services;