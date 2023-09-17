import React, { useState, useRef, useEffect } from 'react';
import logo from '../assets/logo.svg';

export interface NavBarProps {
  sections: string[];
  collapsed: boolean;
  className: string;
}
export default function NavBar({
  sections,
  collapsed,
  className = '',
}: NavBarProps) {
  const [height, setHeight] = useState(0);
  const navBarRef = useRef<HTMLDivElement>(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [currentPlace, setCurrentPlace] = useState('Home');
  const currentStyles = 'shadow-[inset_0_0_20px_#ffffff7a]';
  useEffect(() => {
    setHeight(navBarRef.current!.clientHeight);
  });
  return (
    <div className={`${className} w-full`}>
      <div
        ref={navBarRef}
        className='font-DMSans leading-widest text-cream mb-4 px-4 py-5 z-[100] w-full fixed rounded-lg font-light'
      >
        <div className='flex justify-between items-center gap-5'>
          <div className='xl:w-[15%] sm:w-[35%] md:w-[30vw] w-[50vw] h-fit flex items-center rounded-full backdrop-blur-sm py-2.5'>
            <img
              className='invert drop-shadow-[1px_2px_5px_#fff6edde] px-5'
              src={logo}
              alt=''
            />
          </div>
          {collapsed ? (
            <button
              className='relative w-[30px] h-[20px] mr-4'
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              <div className='block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <span
                  className={`block absolute rounded-full h-0.5 w-5 md:w-6 bg-current transform transition duration-500 ease-in-out ${
                    mobileMenu ? 'rotate-45' : '-translate-y-1.5'
                  }`}
                />
                <span
                  className={`block absolute rounded-full h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                    mobileMenu ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block absolute rounded-full h-0.5 w-5 md:w-6 bg-current transform transition duration-500 ease-in-out ${
                    mobileMenu ? '-rotate-45' : 'translate-y-1.5'
                  }`}
                />
              </div>
            </button>
          ) : (
            <div className='space-x-4 pr-4'>
              {sections.map((section, i) => (
                <button
                  key={i}
                  className={`2xl:text-lg py-2.5 px-5 hover:scale-105 hover:translate-y-[0.3rem] rounded-full backdrop-blur-sm duration-500 hover:drop-shadow-[1px_3px_10px_#ffffffa8] transition ease-in-out ${
                    currentPlace === section ? currentStyles : ''
                  }`}
                  onClick={() => setCurrentPlace(section)}
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
        {collapsed && (
          <div className={`flex flex-col gap-4 items-end w-full z-[90] pr-4 transition-all duration-500 ${mobileMenu ? 'animate-[slideDown_1s] opacity-1' : 'animate-[slideUp_1s] opacity-0'}`}>
            {sections.map((section, i) => (
              <button
                key={i}
                className={`${mobileMenu ? '' : 'pointer-events-none'} 2xl:text-lg py-2.5 px-5 hover:scale-105 hover:translate-y-[0.3rem] bg-[#d1d1d129] rounded-full backdrop-blur-sm duration-500 hover:drop-shadow-[1px_3px_10px_#ffffffa8] transition ease-in-out ${
                  currentPlace === section ? currentStyles : ''
                }`}
                onClick={() => setCurrentPlace(section)}
              >
                {section}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
