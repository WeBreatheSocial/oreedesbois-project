import React from 'react'
import Image from 'next/image'
import Projet from '../public/png/projet-1.png'
import Contact from '../public/svg/contact.svg'
import Form from './sideform'

const sidecontact = () => {
    return (
        <div className="mx-auto py-2 px-12 bg-white sideForm">
            <div className=' max-w-md mx-auto  flex flex-1 flex-col justify-center items-center '> 
            <div className='mx-auto w-full lg:px-0'>
            {/* <span className='block text-center '><Image src={Contact} alt='' width={50}/> </span> */}
            <h1 className='section-title my-2 text-center'> CONTACT</h1>
            <h6 className='text-sm my-2 text-center'> RÉSERVEZ VOTRE RENDEZ-VOUS DÈS MAINTENANT</h6>
            <h6 className='section-subtitle my-2 text-center'>Nous reviendrons vers vous au plus vite.</h6>
            </div>
          <Form />
            </div>
        </div>
    )
}

export default sidecontact
