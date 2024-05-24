import React from 'react';
import SignUpForm from './SignUpForm';

const Main1 = () => {
    return (
        <div className="mt-20 p-10 flex flex-col lg:flex-row justify-center items-center">
            <div className="w-full lg:w-1/2 flex items-center justify-center">
                <SignUpForm />
            </div>
            <div className="hidden lg:block lg:w-1/2 sm:w-full">
                <img src="https://res.cloudinary.com/dhqgc5kzm/image/upload/v1714761119/hero-img_o9iijh.png" alt="hero-img" />
            </div>
        </div>
    );
};

export default Main1;