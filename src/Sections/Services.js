import React from 'react';
import { services } from '../constants';
import ServiceCard from '../Components/ServiceCard';

const Services = () => {
  return (
    <section className='min-container flex flex-wrap justify-center gap-9'>
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  )
}

export default Services;