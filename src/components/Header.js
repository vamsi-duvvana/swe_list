import { Typography } from '@cred/neopop-web/lib/components'
import { FontVariant, colorPalette } from '@cred/neopop-web/lib/primitives'
import React from 'react'

const Header = () => {
    return (
        <div className='p-10 flex justify-between'>
            {/* <img className='' src="" alt="logo-png" /> */}
            <Typography {...FontVariant.CirkaHeadingBold36} color={colorPalette.popWhite[500]}>
                OpenHub
            </Typography>
            <ul className='flex'>
                <li className='text-white px-10'>About Us</li>
                <li className='text-white px-10'>Visit Github</li>
                <li className='text-white px-10'>Team</li>
            </ul>
        </div>
    )
}

export default Header