import LandingPage from '@/components/LandingPage';
import Navbar from '@/components/Navbar';
import Head from 'next/head';
import Image from 'next/image';
import Footer from '@/components/Footer';

export default function Home() {
  return (
  <div>
    <Navbar />
    <LandingPage />
    <Footer />
  </div>
  )
}
