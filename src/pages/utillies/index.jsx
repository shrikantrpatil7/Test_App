import Head from 'next/head';
import { useEffect, useRef } from 'react';
import MainLayout from '@layouts/Main';
import Utillity from '@components/Utillity/Utillity';
import Footer from '@components/App/Footer';
import Navbar from '@components/Navbars/AppNav';
import TopNav from '@components/Navbars/TopNav';
import navbarScrollEffect from "@common/navbarScrollEffect";

const Utillities = () => {
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
          <Utillity />
        </main>
        <Footer noWave />
      </MainLayout>
    </>
  );
}

export default Utillities;