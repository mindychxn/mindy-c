import React, { useEffect, useRef, useState } from 'react';
import './projects.css';
import ProjectCard from './ProjectCard';
import expenseAnimation from '../assets/expense.json';
import gameAnimation from '../assets/game.json';
import lottie from 'lottie-web';

export default function Projects() {
  const [playExpenseAnimation, setPlayExpenseAnimation] = useState(false);
  const [playGameAnimation, setPlayGameAnimation] = useState(false);

  useEffect(() => {
    const expense = lottie.loadAnimation({
      animationData: expenseAnimation,
      autoplay: playExpenseAnimation,
      container: expenseContainer.current!,
      loop: true,
      renderer: 'svg',
    });
    const game = lottie.loadAnimation({
      animationData: gameAnimation,
      autoplay: playGameAnimation,
      container: gameContainer.current!,
      loop: true,
      renderer: 'svg',
    });
    return () => {
      expense.destroy();
      game.destroy();
    };
  }, [playExpenseAnimation, playGameAnimation]);
  const expenseContainer = useRef(null);
  const gameContainer = useRef(null);
  return (
    <div className='relative flex flex-col gap-4 sm:gap-7 xl:gap-10 justify-center items-center w-full projects my-20'>
      <div className='font-bold text-[44px] sm:text-6xl xl:text-7xl bg-clip-text bg-gradient-to-tr from-[#9c7eff] via-[#f1e8ff] to-[#fb94f2] text-transparent p-1'>
        Projects
      </div>
      <div className='font-DMSans sm:text-xl xl:text-2xl font-light text-white w-3/4 text-center'>
        The best part of coding is undoubtedly being able to design and create
        your own projects to bring your ideas and concepts to life. Here are
        some that I have completed so far!
      </div>
      <div className='flex-col flex lg:grid grid-cols-2 w-[72%] gap-12 sm:gap-20 mt-6'>
        <ProjectCard
          name='Expense Tracker'
          description='To help you track and visualize your expenses'
          className='lg:mb-[100px] animate-float1'
          onMouseOver={() => setPlayExpenseAnimation(true)}
          onMouseOut={() => setPlayExpenseAnimation(false)}
          right={false}
        >
          <div className='p-6 sm:p-10 rounded-lg bg-gradient-to-b from-[#512ad4] to-indigo-400 shadow-lg'>
            <div ref={expenseContainer} />
          </div>
        </ProjectCard>
        <ProjectCard
          name='Simon Game'
          description='The memory game you know and love'
          onMouseOver={() => setPlayGameAnimation(true)}
          onMouseOut={() => setPlayGameAnimation(false)}
          right
          className='lg:mt-[100px] animate-float2 text-left lg:text-right'
        >
          <div className='p-6 sm:p-10 rounded-lg bg-gradient-to-b to-red-400 from-orange-300'>
            <div ref={gameContainer} />
          </div>
        </ProjectCard>
      </div>
    </div>
  );
}
