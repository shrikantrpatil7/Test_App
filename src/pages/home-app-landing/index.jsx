import { useEffect, useRef } from 'react';


//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
import TopNav from '@components/Navbars/TopNav';
import Navbar from '@components/Navbars/AppNav';
import Header from '@components/App/Header';
import Clients from '@components/App/Clients';
import Features from '@components/App/Features';
import About from '@components/App/About';
import Screenshots from '@components/App/Screenshots';
import Testimonials from '@components/App/Testimonials';


import Community from '@components/App/Community';
import Footer from '@components/App/Footer';




const HomeAppLanding = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);



  return (
    <>

   
      <MainLayout>
        <TopNav style="4" />
        <Navbar navbarRef={navbarRef} />
        <Header />
        <main>
         
          <Features />
          <About />
          <Screenshots />
         
        
         
          
          <Community />
          <Clients />
        </main>
        <Footer />
      </MainLayout>
    </>
  )
}

export default HomeAppLanding;