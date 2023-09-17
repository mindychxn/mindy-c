import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import { HashLink } from 'react-router-hash-link';

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
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div className={`${className} w-full`}>
      <div
        className='font-DMSans leading-widest text-cream mb-4 px-4 py-2 z-[100] w-full fixed rounded-lg font-light lg:backdrop-blur-sm'
      >
        <div className='flex justify-between items-center gap-5'>
          <div className='sm:w-[35%] md:w-[30vw] lg:w-[20vw] w-[50vw] h-fit flex items-center rounded-full backdrop-blur-sm py-3'>
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
                <HashLink
                  smooth 
                  to={'/#' + section.toLowerCase()}
                  key={i}
                  className='2xl:text-lg py-3 px-5 rounded-full duration-500 hover:shadow-[inset_0_0_20px_#ffffff7a] active:shadow-[inset_0_0_20px_#ffffff] transition-all ease-in-out'
                >
                  {section}
                </HashLink>
              ))}
            </div>
          )}
        </div>
        {collapsed && (
          <div className={`flex flex-col gap-4 items-end w-full z-[90] pr-4 transition-all duration-500 ${mobileMenu ? 'animate-[slideDown_1s] opacity-1' : 'animate-[slideUp_1s] opacity-0'}`}>
            {sections.map((section, i) => (
              <HashLink
                  smooth 
                  to={'/#' + section.toLowerCase()}
                  key={i}
                className={`${mobileMenu ? '' : 'pointer-events-none'} 2xl:text-lg py-3 px-5 bg-[#d1d1d129] rounded-full backdrop-blur-sm duration-500 hover:shadow-[inset_0_0_20px_#ffffff7a] active:shadow-[inset_0_0_20px_#ffffff] transition-all ease-in-out`}
              >
                {section}
              </HashLink>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
