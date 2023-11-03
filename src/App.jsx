import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import Tools from './components/Tools/Tools';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ButtonMobile from './components/design-system/Button-mobile/ButtonMobile';



function App() {
  
  const isMobile = useMediaQuery({ query: '(max-width: 960px)' });

  return (
    <>
      {isMobile ? <ButtonMobile /> : <Header />}
      <Hero />
      <Products />
      <Tools />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
