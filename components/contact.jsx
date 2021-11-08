import React from 'react'
import Image from 'next/image'
import Projet from '../public/png/projet-1.png'
import Contact from '../public/svg/contact.svg'
import Form from './form'

const contact = () => {
    return (
        <div className="mx-auto px-4 sm:px-6 py-2" id='contact'>
            <div className='max-w-6xl mx-auto  flex flex-1 flex-col justify-center items-center py-32'> 
            <div className='mx-auto lg:w-2/5 w-full px-6 lg:px-0'>
            <span className='block text-center '><Image src={Contact} alt='' width={50}/> </span>
            <h1 className='section-title my-5 text-center'> CONTACT</h1>
            <h4 className='section-subtitle my-5 text-center'> RÉSERVEZ VOTRE RENDEZ-VOUS DÈS MAINTENANT</h4>
            <p className='section-p my-5 text-center'>Nous reviendrons vers vous au plus vite.</p>
            </div>
          <Form />
            </div>
        </div>
    )
}

export default contact
