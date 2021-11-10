import React from 'react'
import Image from 'next/image'
import Logo from '../public/png/logo2.png'
import MailIcon from '../public/png/mail.png'
import CallIcon from '../public/png/call.png'
import MapIcon from '../public/png/map.png'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const footer = () => {
    return (
        <div className='footer-ctn'>
            <div className='max-w-6xl mx-auto lg:px-12 px-8'> 
            <div className='py-8 lg:py-12 flex flex-1 md:flex-row flex-col justify-between items-center space-y-6'>
                    <div className='w-full md:w-1/3 px-6 md:px-0 text-center md:text-justify'><Image src={Logo} alt=''/>
                    <p className='section-p2 text-sm md:text-base  text-justify'>Koutoubia Littaamir Holding occupe aujourd’hui une place de choix dans le secteur de l’immobilier et est reconnue pour la qualité et le sérieux de ses services.</p>
                    </div>
                    <div className='md:flex hidden w-full md:w-1/3 px-6 md:px-0 md:flex-col md:items-between md:justify-between space-y-5 lg:space-y-8'>
                    <Link activeClass="active"
      to='projet'
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={-50}
      duration={500}
      isDynamic={true}
      ignoreCancelEvents={false}
      spyThrottle={500}
      className='navlink-white'
>
  Le projet
</Link>
<Link activeClass="active"
      to='villa'
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={0}
      duration={500}
      isDynamic={true}
      ignoreCancelEvents={false}
      spyThrottle={500}
      className='navlink-white'
>
  Villa témoin
</Link>
<Link activeClass="active"
      to='access'
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={500}
      isDynamic={true}
      ignoreCancelEvents={false}
      spyThrottle={500}
      className='navlink-white'
>
  L&apos;accès
</Link>
<Link activeClass="active"
      to='contact'
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={500}
      isDynamic={true}
      ignoreCancelEvents={false}
      spyThrottle={500}
      className='navlink-white'
>
  Contact
</Link>
                    </div>
                    <div className='w-full px-6 md:px-0 md:w-1/3 flex flex-col  py-2 lg:py-6  text-white space-y-5 lg:space-y-8'>
                    <div className='flex flex-row  justify-start  space-x-2'>
                      <div><Image src={MapIcon} width='40px' height='40px' alt='' /></div>
                      <div className='text-sm  self-center'>Route 3009 – Près de la gare de Bouskoura Casablanca 27182</div>
                    </div>
                    
                    <div className='flex flex-row items-center justify-start  space-x-2'>
                    <div><Image src={CallIcon} width='20px' height='20px' alt=''/></div>
                    <div className='text-sm'>
                      <p> <a href="tel:+212522781781">+212 522 781 781</a></p>
                      <p> <a href="tel:+212661510510">+212 661 510 510</a></p>
                    </div>
                    </div>
                    
                    <div className='flex flex-row items-center justify-start  space-x-2'>
                    <div><Image src={MailIcon} width='22px' height='22px' alt=''/></div>
                    <div className='text-sm'><a href="mailto:contact@oreedesbois.ma"> contact@oreedesbois.ma</a></div>
                    </div>
                    </div>

            </div>
            <hr className='text-white bg-white w-full max-w-6xl'/>
            <p className='pb-6 pt-2 text-center text-white'>Orée des Bois © 2021</p>
            </div>
        </div>
    )
}

export default footer
