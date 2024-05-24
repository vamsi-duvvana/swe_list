import React from 'react';

const RightHeader = ({ githubLink, aboutLink }) => {
return (
    <div className="flex items-center justify-center space-x-4 p-4 sm:p-6">
    <a href={aboutLink} target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base lg:text-lg text-black hover:text-gray-700">
        About Us
    </a>
    <a href={githubLink} target="_blank" rel="noopener noreferrer" title="Visit our Github" className="text-sm sm:text-base lg:text-lg text-black hover:text-gray-700">
        GitHub
    </a>
    </div>
);
};

export default RightHeader;
