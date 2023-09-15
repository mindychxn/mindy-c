import React from 'react';
import './landingpage.css';
import profilePic from '../assets/landingPage.svg';
export default function LandingPage() {
  return (
    <div className='landing-page flex items-center justify-center gap-14 relative h-screen'>
      <div className='flex flex-col w-[40%] p-10'>
        <div className='font-semibold z-10 text-[#f8f6e5] text-5xl pl-[17px]'>
          Hi there,
        </div>
        <div className='animate-glow font-bold text-8xl z-10 bg-clip-text bg-gradient-to-tr from-[#f7aaf3] via-[#f8f6e5] to-[#feb29b] text-transparent p-4'>
          I'm Mindy.
        </div>
        <div className='text-cream tracking-[0.0125em] font-DMSans text-xl font-light z-10 pl-[17px] mt-5'>
          As a software developer, I aim to create impactful and innovative
          solutions.
        </div>
      </div>
      <img
        className='w-1/3 animate-pulse drop-shadow-glow drop'
        src={profilePic}
        alt=''
      />
    </div>
  );
}
