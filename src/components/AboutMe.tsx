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
      <div className='relative flex flex-col lg:flex-row lg:gap-20 w-full font-DMSans justify-center items-center about-me px-10 py-20'>
      <div
        className='-my-4 w-3/4 md:w-[60%] lg:w-[50%] drop-shadow-[1px_5px_10px_#ffac8090] z-10'
        ref={profileContainer}
      />
      <div className='flex flex-col gap-4 md:gap-6 text-center lg:text-left w-3/4 lg:w-1/2 z-10'>
        <div className='font-bold text-[44px] sm:text-6xl xl:text-7xl bg-clip-text bg-gradient-to-tr from-[#ffbf9c] via-[#f1e8ff] to-[#fb94f2] text-transparent'>
          About Me
        </div>
        <div className='font-DMSans font-light md:text-lg 2xl:text-xl !leading-relaxed lg:w-[85%] text-white'>
          I am currently a second year computer science student at the <span className='bg-clip-text bg-gradient-to-tr from-[#f7aaf3] via-[#f8f6e5] to-[#ff9271] text-transparent'>University of Waterloo</span>. 
          I am drawn to the innovative and ever-evolving field of computer science due to its countless opportunities for learning and growth. I love the innumerable possibilities there are, which allow me to bring my visions and ideas to life! 
          Design is also a passion of mine and I thoroughly enjoyed creating and developing this personal website.
          Outside of coding, I enjoy reading, watching sitcoms / rom-coms, sketching, cooking / baking, and playing badminton.
        </div>
      </div>
    </div>
    </section>
    
  );
}
