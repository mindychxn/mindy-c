import { useEffect, useRef } from 'react';
import computerAnimation from '../assets/computer.json';
import waveAnimation from '../assets/wave.json';
import lottie from 'lottie-web';

export default function AboutMe() {
  useEffect(() => {
    const computer = lottie.loadAnimation({
      animationData: computerAnimation,
      autoplay: true,
      container: computerContainer.current!,
      loop: true,
      renderer: 'svg',
    });
    const wave = lottie.loadAnimation({
      animationData: waveAnimation,
      autoplay: true,
      container: waveContainer.current!,
      loop: true,
      renderer: 'svg',
    });
    return () => {
      computer.destroy();
      wave.destroy();
    };
  }, []);

  const computerContainer = useRef(null);
  const waveContainer = useRef(null);

  return (
    <div className='relative flex about-me h-screen w-full font-DMSans justify-center items-center'>
      <div className='backdrop-blur-[2px] z-50 bg-[#b05bff19] flex justify-center items-center flex-col h-fit rounded-lg font-DMSans text-white w-1/2'>
        <div
          className='w-[50%] h-[50%] drop-shadow-[1px_5px_10px_rgba(174,47,209,0.83)]'
          ref={computerContainer}
        />
        <div className='font-semibold text-3xl font-DMSans'>It's nice to meet you</div>
      </div>
      <div
        className='absolute z-0 right-0 bottom-0 w-full drop-shadow-[1px_1px_2px_rgba(242,124,97,1)]'
        ref={waveContainer}
      />
    </div>
  );
}
