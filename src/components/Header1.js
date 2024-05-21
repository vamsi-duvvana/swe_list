import React, { useState } from 'react';
import LeftHeader from './LeftHeader';
import RightHeader from './RightHeader';
import HamburgerMenu from './HamburgerMenu';

const Header1 = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='fixed top-2 left-0 right-0 mx-auto w-4/5 sm:w-1/2 h-16 sm:h-18 bg-bright-turquoise-100 px-5 py-2 rounded-full flex justify-between items-center shadow-lg z-20'>
            <LeftHeader />
            <div className="sm:hidden">
                <button onClick={toggleMenu} className="text-black focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isMenuOpen ? 'M4 6h16M4 12h16m-7 6h7' : 'M6 18L18 6M6 6l12 12'}></path>
                    </svg>
                </button>
                {isMenuOpen && <HamburgerMenu />}
            </div>
            <div className="hidden sm:block">
                <RightHeader />
            </div>
        </div>
    );
};

export default Header1;
// import React from 'react'
// import LeftHeader from './LeftHeader'
// import RightHeader from './RightHeader'

// const Header1 = () => {
//     return (
//         <div className='fixed top-2 left-0 right-0 mx-auto w-4/5 sm:w-1/2 h-13 sm:h-13 bg-bright-turquoise-100 px-7 py-3 rounded-full flex justify-between items-center shadow-lg z-20'>
//             <LeftHeader />
//             <RightHeader />
//         </div>
//     )
// }

// export default Header1