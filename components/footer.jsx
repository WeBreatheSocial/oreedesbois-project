import React from 'react'
import Image from 'next/image'
import Logo from '../public/png/logo2.png'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const footer = () => {
    return (
        <div className='footer-ctn'>
            <div className='max-w-6xl mx-auto'> 
            <div className='py-24 flex flex-1 md:flex-row flex-col justify-between items-center'>
                    <div className='w-1/3'><Image src={Logo} alt=''/>
                    <p className='section-p2'>Koutoubia Littaamir Holding occupe aujourd’hui une place de choix dans le secteur de l’immobilier et est reconnue pour la qualité et le sérieux de ses services.</p>
                    </div>
                    <div className='w-1/3 flex flex-col items-between justify-between space-y-4'>
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
                    <div className='w-1/3 flex flex-col py-2 justify-between content-between text-white'>
                    <div>Route 3009 – Près de la gare de Bouskoura Casablanca 27182</div>
                    <br/>
                    <div>+212 522 781 781 | +212 661 510 510</div>
                    <br/>
                    <div>contact@oreedesbois.ma</div>
                    </div>

            </div>
            <hr className='text-white bg-white w-full max-w-6xl'/>
            <p className='py-2 text-center text-white'>Orée des Bois © 2021</p>
            </div>
        </div>
    )
}

export default footer
