import React, { useEffect, useRef } from 'react';
import './projects.css';
import ProjectCard from './ProjectCard';
import expenseLottie from '../assets/expense.json';
import gameLottie from '../assets/game.json';
import todoLottie from '../assets/todo.json';
import pokeballLottie from '../assets/pokeball.json';
import lottie, { AnimationItem } from 'lottie-web';

export default function Projects() {
  const expenseAnimation = useRef<AnimationItem | null>(null);
  const gameAnimation = useRef<AnimationItem | null>(null);
  const todoAnimation = useRef<AnimationItem | null>(null);
  const pokeballAnimation = useRef<AnimationItem | null>(null);

  useEffect(() => {
    expenseAnimation.current = lottie.loadAnimation({
      animationData: expenseLottie,
      autoplay: false,
      container: expenseContainer.current!,
      loop: false,
      renderer: 'svg',
    });
    gameAnimation.current = lottie.loadAnimation({
      animationData: gameLottie,
      autoplay: false,
      container: gameContainer.current!,
      loop: false,
      renderer: 'svg',
    });
    todoAnimation.current = lottie.loadAnimation({
      animationData: todoLottie,
      autoplay: false,
      container: todoContainer.current!,
      loop: false,
      renderer: 'svg',
    });
    pokeballAnimation.current = lottie.loadAnimation({
      animationData: pokeballLottie,
      autoplay: false,
      container: pokeballContainer.current!,
      loop: false,
      renderer: 'svg',
    });
    return () => {
      expenseAnimation.current?.destroy();
      gameAnimation.current?.destroy();
      todoAnimation.current?.destroy();
      pokeballAnimation.current?.destroy();
    };
  }, []);
  const expenseContainer = useRef(null);
  const gameContainer = useRef(null);
  const todoContainer = useRef(null);
  const pokeballContainer = useRef(null);

  const handleMouseEnter = (
    ref: React.MutableRefObject<AnimationItem | null>
  ) => {
    ref.current?.setDirection(1);
    ref.current?.play();
  };

  const handleMouseLeave = (
    ref: React.MutableRefObject<AnimationItem | null>
  ) => {
    ref.current?.setDirection(-1);
    ref.current?.play();
  };

  return (
    <section id='projects'>
      <div className='relative flex flex-col gap-4 sm:gap-7 xl:gap-10 justify-center items-center w-full projects py-20'>
        <div className='font-bold text-[44px] sm:text-6xl xl:text-7xl bg-clip-text bg-gradient-to-tr from-[#9c7eff] via-[#f1e8ff] to-[#fb94f2] text-transparent p-1'>
          Projects
        </div>
        <div className='font-DMSans sm:text-xl xl:text-2xl font-light text-white w-3/4 text-center'>
          The best part of coding is undoubtedly being able to design and create
          your own projects to bring your ideas and concepts to life. Here are
          some that I have completed so far!
        </div>
        <div className='flex-col flex items-center sm:gap-20 mt-6'>
          <div className='flex-col flex lg:grid grid-cols-2 w-[72%] gap-12 sm:gap-20 mt-6'>
            <ProjectCard
              name='Taskify'
              description='Take charge of your day, one to-do at a time! Seamlessly organize your tasks, set priorities, and track progress effortlessly.'
              onMouseOver={() => handleMouseEnter(todoAnimation)}
              onMouseOut={() => handleMouseLeave(todoAnimation)}
              right={false}
              className='lg:mb-[100px] animate-float1 text-left lg:text-right'
              href='https://perntodo-client.onrender.com'
            >
              <div className='p-6 sm:p-10 rounded-lg bg-gradient-to-b from-[#512ad4] to-indigo-300 shadow-lg h-[50%]'>
                <div ref={todoContainer} />
              </div>
            </ProjectCard>
            <ProjectCard
              name='Adopt-a-mon'
              description='A Pokémon adoption center. Discover Pokemon who are ready for a fresh start.'
              onMouseOver={() => handleMouseEnter(pokeballAnimation)}
              onMouseOut={() => handleMouseLeave(pokeballAnimation)}
              right
              className='lg:mt-[100px] animate-float2 text-left lg:text-right'
              href='https://github.com/pollyliu1/cs348-project/blob/main/milestone-3/README.md'
            >
              <div className='p-6 sm:p-10 rounded-lg bg-gradient-to-b to-red-400 from-orange-300 flex justify-center h-[50%]'>
                <div className='w-[75%]' ref={pokeballContainer} />
              </div>
            </ProjectCard>
          </div>
          <div className='flex-col flex lg:grid grid-cols-2 w-[72%] gap-12 sm:gap-20'>
            <ProjectCard
              name='Expense Tracker'
              description='To help you track and visualize your expenses so you can spot the moment things went off the rails… in chart form.'
              className='lg:mb-[100px] animate-float1'
              onMouseOver={() => handleMouseEnter(expenseAnimation)}
              onMouseOut={() => handleMouseLeave(expenseAnimation)}
              right={false}
              href='https://expensetracker-mc.netlify.app'
            >
              <div className='p-6 sm:p-10 rounded-lg bg-gradient-to-b from-pink-500 to-fuchsia-300 h-[50%]'>
                <div ref={expenseContainer} />
              </div>
            </ProjectCard>
            <ProjectCard
              name='Simon'
              description='Repeat the pattern, keep your cool, and see how long your brain can hang on. Simon never forgets, but you might!'
              onMouseOver={() => handleMouseEnter(gameAnimation)}
              onMouseOut={() => handleMouseLeave(gameAnimation)}
              right
              className='lg:mt-[100px] animate-float2 text-left lg:text-right'
              href='https://simon-mc.netlify.app'
            >
              <div className='p-6 sm:p-10 rounded-lg bg-gradient-to-b to-red-400 from-orange-300'>
                <div ref={gameContainer} />
              </div>
            </ProjectCard>
          </div>
        </div>
      </div>
    </section>
  );
}
