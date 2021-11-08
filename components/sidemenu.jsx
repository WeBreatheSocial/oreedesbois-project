import React, { useState } from 'react'
import Contact from '../components/sidecontact'

const Sidemenu = () => {

    const [sideMenu, setSideMenu] = useState(true)

    const handleSide = () => {
        setSideMenu(!sideMenu);
        console.log(sideMenu);
    }
    return (
        <div className='absolute'>
        <div className={sideMenu ? ' showside' : 'hiddenside'}>
            <div className={sideMenu ? 'absolute w-10 h-10 z-50 bg-sideactive text-white' : 'relative w-10 h-10 z-50 bg-side text-white'} onClick={handleSide}>TEXT</div>
                <Contact />
        </div>
        </div>
    )
}

export default Sidemenu
