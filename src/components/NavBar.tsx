import React, { useState } from 'react';
import logo from '../assets/logo.svg';

export interface NavBarProps {
  sections: string[];
  collapsed: boolean;
  className: string;
}
export default function NavBar({ sections, collapsed, className = '' }: NavBarProps) {
  const [currentPlace, setCurrentPlace] = useState('Home');
  const currentStyles = 'shadow-[inset_0_0_20px_#ffffff7a]';
  return (
    <div className={`font-DMSans leading-widest text-cream px-4 py-5 z-[100] justify-between gap-5 w-full fixed rounded-lg font-light ${className}`}>
      <div className='xl:w-[15%] sm:w-[25%] w-3/4 h-fit flex items-center rounded-full backdrop-blur-sm py-2.5'>
        <img
          className='invert drop-shadow-[1px_5px_5px_#fff6edde] px-5'
          src={logo}
          alt=''
        />
      </div>
      <div className='space-x-4 pr-4'>
        {sections.map((section, i) => (
          <button
            key={i}
            className={`2xl:text-lg py-2.5 px-5 hover:scale-105 hover:translate-y-[0.3rem] rounded-full backdrop-blur-sm duration-500 hover:drop-shadow-[1px_5px_10px_#ffffffa8] transition ease-in-out ${
              currentPlace === section ? currentStyles : ''
            }`}
            onClick={() => setCurrentPlace(section)}
          >
            {section}
          </button>
        ))}
      </div>
    </div>
  );
}
