import Navbar from './Components/Navbar';
import Hero from './Sections/Hero';
import PopularProducts from './Sections/PolularProducts';
import SuperQuality from './Sections/SuperQuality';
import Services from './Sections/Services';
import SpecialOffers from './Sections/SpecialOffers';
import CustomerReviews from './Sections/CustomerReviews';
import Subscribe from './Sections/Subscribe';
import Footer from './Sections/Footer';
import ScrollToTop from "react-scroll-to-top";
import { ScrollRestoration } from "react-router-dom";

const App = () => {
  return (
    <main className='relative'>
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
      <section className='bg-pale-blue padding-x sm:py-20 py-10'>
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
    </main>
  )
}

export default App;