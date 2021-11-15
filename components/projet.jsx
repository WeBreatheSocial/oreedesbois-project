import React from 'react'
import Image from 'next/image'
import Projet from '../public/png/projet-1.png'
import Compass from '../public/svg/projet.svg'

const projet = () => {
    return (
        <div className="max-w-6xl mx-auto   lg:px-12 px-8 lg:py-12 " id='projet'>
            <div className='flex flex-1 flex-col lg:flex-row justify-center items-center'> 
            <div className='mx-auto lg:w-1/2 w-full  lg:px-0'>
            <span className='lg:hidden block text-center lg:text-left mt-5'><Image src={Compass} alt='' width='60px' height={60}/> </span>
            <h1 className='section-title my-5 lg:hidden block text-center '> LE PROJET</h1>
            <h4 className='section-subtitle my-5 lg:hidden block text-center'> CONSTRUISEZ VOTRE VILLA DE RÊVE SUR MESURE !</h4>
            <Image src={Projet} alt=''/>
            </div>
            <div className='mx-auto lg:w-1/2 w-full  space-y-2'>
                <span className='lg:block hidden'><Image src={Compass}alt=''/> </span>
            <h1 className='section-title my-5 lg:block hidden'> LE PROJET</h1>
            <h4 className='section-subtitle my-5 lg:block hidden'> CONSTRUISEZ VOTRE VILLA DE RÊVE SUR MESURE !</h4>
            <p className='section-p my-5'>Orée des bois est un projet de Koutoubia Littaamir, qui comporte des lots de terrains pour villas d’une superficie allant de 250 m² jusqu’à 500 m² à un prix défiant toute concurrence.  <br/>
Située dans un quartier d’avenir à Bouskoura et à seulement 15 minutes de Casablanca, votre nouvelle adresse se distinguera par un calme qui rythmera votre quotidien en famille. <br/>

Le chemin vers votre rêve commence avec Orée des bois, obtenez votre lot de villa à Bouskoura à partir de 4600 DH/m² seulement ! <br/>
Les titres fonciers sont disponibles et la livraison est immédiate. <br/>

Réservez dès maintenant votre visite en remplissant le formulaire sur notre site.
</p>
            </div>
            </div>
        </div>
    )
}

export default projet
