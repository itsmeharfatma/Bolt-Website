import React from 'react';
import Navbar from '../Components/Navbar'
import Hero from '../Homepage/Hero';
import PopularProducts from '../Homepage/PolularProducts';
import SuperQuality from '../Homepage/SuperQuality';
import Services from '../Homepage/Services';
import SpecialOffers from '../Homepage/SpecialOffers';
import CustomerReviews from '../Homepage/CustomerReviews';
import Subscribe from '../Homepage/Subscribe';
import Footer from '../Homepage/Footer';
import ScrollToTop from "react-scroll-to-top";
import { ScrollRestoration } from "react-router-dom";
import { motion } from "framer-motion"

const Home = () => {
    return (
        <motion.main className='relative' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.1 } }}>
            <Navbar />

            <section className='lg:padding-l wide:padding-r padding-b'>
                <Hero />
            </section>
            <section className='bg-pale-blue padding'>
                <PopularProducts />
            </section>
            <section className='padding'>
                <SuperQuality />
            </section>
            <section className='bg-pale-blue padding-x sm:py-12 py-10'>
                <Services />
            </section>
            <section className='padding'>
                <SpecialOffers />
            </section>
            <section className='bg-pale-blue padding'>
                <CustomerReviews />
            </section>
            <section className='padding-x sm:py-32 py-16 w-full'>
                <Subscribe />
            </section>
            <section className='bg-black padding-x padding-t pb-12'>
                <Footer />
            </section>

            <ScrollRestoration />

            <ScrollToTop smooth top="20" className="override" style={{ borderRadius: "25px", backgroundColor: '#ff6453', width: '35px', height: '35px' }} component={<i class="fa-solid fa-arrow-up fa-lg" style={{ color: "white" }}></i>} />
        </motion.main>
    )
}

export default Home;