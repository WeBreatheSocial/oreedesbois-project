import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Banner from '../components/banner'
import Projet from '../components/projet'
import Villa from '../components/villa'
import Access from '../components/access'
import Contact from '../components/contact'
import Footer from '../components/footer'
import SideMenu from '../components/sidemenu'
import SideMenuN from '../components/newsideform'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Orée des Bois</title>
        <meta name="description" content="Orée des Bois - Landing Page" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <SideMenuN />
      {/* <SideMenu /> */}
      <Header />
      <Banner />
      <Projet />
      <Villa />
      <Access />
      <Contact />
      <Footer />
      </div>
  )
}
