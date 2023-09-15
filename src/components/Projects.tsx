import React, { useEffect, useRef, useState } from 'react';
import './projects.css';
import ProjectCard from './ProjectCard';
import expenseAnimation from '../assets/expense.json';
import waveAnimation from '../assets/wave.json';
import lottie from 'lottie-web';

export default function Projects() {
  const [playExpenseAnimation, setPlayExpenseAnimation] = useState(false);
  useEffect(() => {
    const expense = lottie.loadAnimation({
      animationData: expenseAnimation,
      autoplay: playExpenseAnimation,
      container: expenseContainer.current!,
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
      expense.destroy();
      wave.destroy();
    };
  }, [playExpenseAnimation]);
  const expenseContainer = useRef(null);
  const waveContainer = useRef(null);
  return (
    <div className='relative flex flex-col gap-10 justify-center items-center w-full projects h-screen'>
      <div className='font-bold text-6xl text-cream animate-glow bg-clip-text bg-gradient-to-tr from-[#ffb7f8] via-cream to-[#b594fb] text-transparent p-4'>
        Projects
      </div>
      <div className='grid grid-cols-2 w-2/3 gap-10'>
        <ProjectCard
          name='Expense Tracker'
          description='Something to track your expenses'
          className='mb-[100px] animate-float1 group/expense'
          onMouseOver={() => setPlayExpenseAnimation(true)}
          onMouseOut={() => (setPlayExpenseAnimation(false), console.log(playExpenseAnimation))}
        >
          <div className='flex rounded-lg group-hover/expense:bg-gradient-to-r from-cyan-500 to-blue-500'>
            <div className='z-50' ref={expenseContainer} />
          </div>
        </ProjectCard>
        <ProjectCard
          name='Expense Tracker'
          description='Something to track your expenses'
          onMouseOver={() => setPlayExpenseAnimation(true)}
          onMouseOut={() => setPlayExpenseAnimation(false)}
          className='mt-[100px] animate-float2'
        />
        <div
        className='absolute z-0 right-0 -bottom-[100px] w-full drop-shadow-[1px_1px_2px_rgba(242,124,97,1)]'
        ref={waveContainer}
      />
      </div>
    </div>
  );
}
