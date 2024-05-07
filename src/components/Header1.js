import React from 'react'
import LeftHeader from './LeftHeader'
import RightHeader from './RightHeader'

const Header1 = () => {
    return (
        <div className='fixed top-2 left-0 right-0 mx-auto w-1/2 h-15 bg-bright-turquoise-100 px-7 py-3 rounded-full flex justify-between items-center shadow-lg z-20'>
            <LeftHeader />
            <RightHeader />
        </div>
    )
}

export default Header1
