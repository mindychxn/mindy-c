import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import './landingpage.css';
import landingAnimation from '../assets/landing1.json';

export default function LandingPage() {
  useEffect(() => {
    const landing = lottie.loadAnimation({
      animationData: landingAnimation,
      autoplay: true,
      container: landingContainer.current!,
      loop: true,
      renderer: 'svg',
    });
    return () => {
      landing.destroy();
    };
  }, []);
  const landingContainer = useRef(null);
  return (
    <section id='home'>
      <div className='landing-page flex flex-col lg:flex-row grid-cols-2 items-center justify-center relative lg:h-screen min-w-fit md:py-16'>
        <div
          ref={landingContainer}
          className='w-[70%] md:w-[40%] lg:w-[40%] pt-16 lg:mt-0'
        />
        <div className='flex flex-col items-center lg:items-start text-center lg:text-left z-10 min-w-fit lg:min-w-0 lg:w-[600px] xl:w-[700px] px-10'>
          <div className='font-semibold text-cream text-3xl md:text-4xl xl:text-6xl'>
            Hi there,
          </div>
          <div className='animate-glow whitespace-nowrap min-w-fit font-bold text-6xl md:text-[80px] xl:text-9xl bg-clip-text bg-gradient-to-tr from-[#f7aaf3] via-[#f8f6e5] to-[#feb29b] text-transparent py-2.5'>
            I'm Mindy.
          </div>
          <div className='text-cream font-DMSans text-lg sm:text-xl font-light mt-5 w-[80%] md:w-2/3 lg:w-[90%] xl:text-2xl xl:w-full'>
            As a software developer, I aim to create impactful and innovative
            solutions.
          </div>
        </div>
      </div>
    </section>
  );
}
