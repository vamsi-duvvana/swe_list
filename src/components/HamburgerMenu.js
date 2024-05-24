import React from 'react';

const HamburgerMenu = ({ githubLink, aboutLink }) => {
    return (
        <div className="absolute top-14 right-5 bg-bright-turquoise-100 rounded-lg shadow-lg p-4 z-30">
            <a href={aboutLink} target="_blank" rel="noopener noreferrer" className="block text-sm text-black hover:text-gray-700 mb-2">
                About Us
            </a>
            <a href={githubLink} target="_blank" rel="noopener noreferrer" title="Visit our Github" className="block text-sm text-black hover:text-gray-700">
                GitHub
            </a>
        </div>
    );
};

export default HamburgerMenu;
