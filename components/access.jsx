import React from 'react'
import Image from 'next/image'
import Projet from '../public/png/projet-1.png'
import Pin from '../public/svg/access.svg'

const access = () => {
    return (
      <div >
        <div className="bg-access mx-auto px-4 sm:px-6 py-2" id='access' >
            <div className='max-w-6xl mx-auto  flex flex-1 flex-col lg:flex-row justify-center items-center py-6 lg:py-32' > 
            <div className='mx-auto lg:w-2/5 w-full px-6 lg:px-0'>
            <span className='block text-center lg:text-left'><Image src={Pin} alt='' width='50px'/> </span>
            <h1 className='section-title my-5 text-center lg:text-left'> PLAN D&apos;ACCÈS</h1>
            <h4 className='section-subtitle my-5 text-center lg:text-left'> SITUÉ DANS L’UNE DES PLUS BELLES ADRESSES À BOUSKOURA</h4>
            <p className='section-p my-5'>Orée des Bois, un projet de Koutoubia Littaamir qui s’engage à vous proposer les meilleurs lots de villa à proximité de toutes commodités : </p>
            <div className='access-options'> 
            <ul className='w-full lg:w-1/2 lg:mx-0 mx-auto px-6 lg:px-0 section-p'>
            <li> Commerces </li>
             <li> Clubs de sports </li>
           <li> Gare de Bouskoura </li>
              <li> Écoles </li>
              <li> Hammams et SPA </li>
             </ul>
            <ul className='w-full lg:w-1/2 lg:mx-0 mx-auto px-6 lg:px-0 section-p'>
              <li> Supermarchés </li>
              <li> Restaurants </li>
             <li> Golf </li>
              <li> Forêt </li>
             </ul>
            </div>
            </div>
            <div className='mx-auto w-full lg:w-3/5 space-y-2 lg:px-5 px-0'>
            <div className='block mx-auto pt-16'>
           <iframe className='w-full shadow-img' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.4678777840927!2d-7.667126684473704!3d33.463167480770366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDI3JzQ3LjQiTiA3wrAzOSc1My44Ilc!5e0!3m2!1sen!2sma!4v1635870322742!5m2!1sen!2sma" height="450" frameBorder="0"  allowFullScreen="" aria-hidden="false" tabIndex="0" loading="lazy"></iframe>
             </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default access
