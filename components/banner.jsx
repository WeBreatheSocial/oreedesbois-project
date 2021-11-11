import React from 'react'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const banner = () => {
    return (
        <section className='banner py-5 max-w-9xl' id='banner'>
         <div className='banner-modal absolute z-50 h-screen w-screen top-0 left-0'> 
         <div className="text-ctn-banner flex flex-col items-center justify-center space-y-6 md:space-y-8 lg:space-y-12 px-6">
         <div> <h1 className='text-3xl lg:text-4xl text-white font-bold text-center'>LOTS DE TERRAIN POUR VILLAS À BOUSKOURA </h1> </div>
         <div> <h1 className='text-xl lg:text-2xl text-white font-bold text-center'>De 250m² à 500m² </h1> </div>
   <div>  <h1 className='text-base lg:text-lg text-white font-normal text-center'> À partir de 4600Dhs/m²  </h1>
   </div>     
    <div> <Link to='contact'
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={500}
      isDynamic={true}
      ignoreCancelEvents={false}
      spyThrottle={500}>
    <button className='btn-color'> 
    Réservez Maintenant
    </button>
    </Link>
   </div> 
       </div>
        </div>
        
        <div className='absolute z-0 h-screen w-screen -top-12 md:top-5 lg:top-0 left-0'> 
            <iframe src="https://streamable.com/e/3g6m5j?autoplay=1&amp;nocontrols=1" frameBorder="0" width="100%" height="100%" allow="autoplay" className=''></iframe>
        </div>
        </section>
    )
}

export default banner
