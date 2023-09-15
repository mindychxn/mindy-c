import React, { useState } from 'react';

export default function NavBar() {
  const [currentPlace, setCurrentPlace] = useState('Home');
  const currentStyles = 'bg-white/20 backdrop-blur-md';
  const commonStyles =
    'py-3 px-5 rounded-full hover:bg-[#fffcf1dc]/50 transition ease-in-out';
  return (
    <div className='font-montserrat p-4 z-50 flex justify-end text-white gap-5 w-full fixed rounded-lg'>
      <button
        className={`${commonStyles} ${
          currentPlace === 'Home' ? currentStyles : ''
        }`}
        onClick={() => setCurrentPlace('Home')}
      >
        Home
      </button>
      <button
        className={`${commonStyles} ${
          currentPlace === 'Projects' ? currentStyles : ''
        }`}
        onClick={() => setCurrentPlace('Projects')}
      >
        Projects
      </button>
      <button
        className={`${commonStyles} ${
          currentPlace === 'About' ? currentStyles : ''
        }`}
        onClick={() => setCurrentPlace('About')}
      >
        About Me
      </button>
    </div>
  );
}
