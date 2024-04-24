import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import TopNav from '@components/Navbars/TopNav';
import Navbar from '@components/Navbars/AppNav';
import TestiMonials from '@components/Testimonials/TestiMonials'
import Footer from '@components/App/Footer';


const TestiMonialsPage = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Iteck - Testimonials</title>
      </Head>

      <MainLayout>
        <TopNav style="4" />
        <Navbar navbarRef={navbarRef} />
        <main className="contact-page style-5">
         <TestiMonials />
        </main>
        <Footer noWave />
      </MainLayout>
    </>
  )
}

export default TestiMonialsPage;