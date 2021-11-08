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
            <div className='py-12 flex flex-1 md:flex-row flex-col justify-between items-center space-y-6'>
                    <div className='w-full md:w-1/3 px-6 md:px-0'><Image src={Logo} alt=''/>
                    <p className='section-p2 text-sm md:text-base py-6'>Koutoubia Littaamir Holding occupe aujourd’hui une place de choix dans le secteur de l’immobilier et est reconnue pour la qualité et le sérieux de ses services.</p>
                    </div>
                    <div className='md:flex hidden w-full md:w-1/3 px-6 md:px-0 md:flex-col md:items-between md:justify-between space-y-4'>
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
  L'accès
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
                    <div className='w-full px-6 md:px-0 md:w-1/3 flex flex-col space-y-3 py-6 justify-between content-between text-white'>
                    <div className='flex flex-row space-x-2'>
                      <div><Image src={MapIcon} width={35} height={35} /></div>
                      <div className='text-sm'>Route 3009 – Près de la gare de Bouskoura Casablanca 27182</div>
                    </div>
                    <br/>
                    <div className='flex flex-row space-x-2'>
                    <div><Image src={CallIcon} width={25} height={25}/></div>
                    <div className='text-sm'>+212 522 781 781 | +212 661 510 510</div>
                    </div>
                    <br/>
                    <div className='flex flex-row space-x-2'>
                    <div><Image src={MailIcon} width={25} height={25}/></div>
                    <div className='text-sm'>  contact@oreedesbois.ma</div>
                    </div>
                    </div>

            </div>
            <hr className='text-white bg-white w-full max-w-6xl'/>
            <p className='py-2 text-center text-white'>Orée des Bois © 2021</p>
            </div>
        </div>
    )
}

export default footer
