import React from 'react'

const banner = () => {
    return (
        <section className='banner py-5 max-w-9xl' id='banner'>
         <div className='banner-modal absolute z-50 h-screen w-screen top-0 left-0'> 
         <div className="text-ctn-banner flex flex-col items-center justify-center  mt-48 space-y-12 px-6">
         <div>         <h1 className='text-2xl text-white font-bold text-center'> TERRAINS POUR VILLAS </h1> </div>

   <div>  <h1 className='text-base text-white font-normal text-center'> Situés dans l’une des plus belles adresses de Bouskoura à partir de 4600Dhs/m² </h1>
   </div>     
    <div>  <button className='btn-color'> 
    <span className='btn-text'>Réservez Maintenant</span>
    </button>
   </div> 
       </div>
        </div>
        
        <div className='absolute z-0 h-screen w-screen top-5 lg:top-0 left-0'> 
            <iframe src="https://streamable.com/e/3g6m5j?autoplay=1&amp;nocontrols=1" frameborder="0" width="100%" height="100%" allow="autoplay" className=''></iframe>
        </div>
        </section>
    )
}

export default banner
