import React from 'react';
import { reviews } from '../constants';
import ReviewCard from '../Components/ReviewCard';

const CustomerReviews = () => {
  return (
    <section className='min-container'>
      <h3 className='font-palanquin text-center text-3xl font-bold'>
        What Our
        <span className='text-coral-red'> Customers </span>
        Say?
      </h3>
      <p className='font-montserrat text-slate-gray text-lg leading-6 m-auto mt-2 max-w-lg text-center'>
        Here are genuine stories from our satisfied customers about their exceptional experiences with us.
      </p>

      <div className='mt-12 sm:mt-10 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14 sm:gap-10'>
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews;