import React, { useState } from 'react'
import Contact from '../components/sidecontact'
import ContactIcon from '../public/svg/sideform.svg'
import Image from 'next/image'

const Sidemenu = () => {

    const [sideMenu, setSideMenu] = useState(true)

    const handleSide = () => {
        setSideMenu(!sideMenu);
        console.log(sideMenu);
    }
    return (
        <div className='absolute'>
        <div className={sideMenu ? ' showside' : 'hiddenside'}>
            <div className={sideMenu ? 'absolute w-10 h-10 z-50 bg-sideactive text-white' : 'relative w-20 h-10 lg:w-10 lg:h-10 z-50 bg-side text-white'} onClick={handleSide}>
            <Image src={ContactIcon} alt='' className='sideform-ico'/>
            </div>
                <Contact />
        </div>
        </div>
    )
}

export default Sidemenu
