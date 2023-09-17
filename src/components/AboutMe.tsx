import React, { useEffect, useRef } from 'react';
import './aboutme.css';
import profileAnimation from '../assets/profile.json';
import lottie from 'lottie-web';

export default function AboutMe() {
  useEffect(() => {
    const profile = lottie.loadAnimation({
      animationData: profileAnimation,
      autoplay: true,
      container: profileContainer.current!,
      loop: true,
      renderer: 'svg',
    });
    return () => {
      profile.destroy();
    };
  }, []);
  const profileContainer = useRef(null);

  return (
    <section id='about'>
      <div className='relative flex flex-col lg:flex-row lg:gap-20 w-full font-DMSans justify-center items-center about-me px-10 pb-20'>
      <div
        className='-my-4 w-3/4 md:w-[60%] lg:w-[50%] drop-shadow-[1px_5px_10px_#ffac8090]'
        ref={profileContainer}
      />
      <div className='flex flex-col gap-4 md:gap-6 text-center lg:text-left w-3/4 lg:w-1/2'>
        <div className='font-bold text-[44px] sm:text-6xl xl:text-7xl bg-clip-text bg-gradient-to-tr from-[#ffbf9c] via-[#f1e8ff] to-[#fb94f2] text-transparent'>
          About Me
        </div>
        <div className='font-DMSans font-light md:text-xl 2xl:text-2xl !leading-relaxed lg:w-[90%] text-white'>
          I am a second your computer science student at the University of
          Waterloo. Personally, I love the countless possiblities that coding
          provides, allowing me to bring a vision or idea to life. Design is a
          passion of mine and I really enjoyed creating this personal website.
          Outside of coding, I enjoy reading, watching sitcoms / rom-coms,
          cooking or baking, and playing badminton!
        </div>
      </div>
    </div>
    </section>
    
  );
}
