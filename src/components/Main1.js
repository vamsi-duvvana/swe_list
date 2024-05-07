import React from 'react'
import SignUpForm from './SignUpForm'

const Main1 = () => {
    return (
        <div className='mt-20 p-10 flex justify-center'>
            <div className='w-1/2 flex items-center justify-center'>
                <SignUpForm />
            </div>
            <div className='w-1/2'>
                <img className='' src="https://res.cloudinary.com/dhqgc5kzm/image/upload/v1714761119/hero-img_o9iijh.png" alt="hero-img" />
            </div>
        </div>
    )
}

export default Main1