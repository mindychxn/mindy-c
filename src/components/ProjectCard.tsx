import React from 'react';
import './projectcard.css';

export interface ProjectCardProps {
  children: React.ReactNode;
  name: string;
  description: string;
  onMouseOver(): void;
  onMouseOut(): void;
  right: boolean;
  className?: string;
  href?: string;
}

export default function ProjectCard({
  children,
  name,
  description,
  onMouseOver,
  onMouseOut,
  right,
  href,
  className = '',
}: ProjectCardProps) {
  return (
    <a href={href} target='_blank' rel='noreferrer' className='z-50'>
      <div
        className={`project-card duration-700 ease-in-out flex flex-col w-full backdrop-blur-md border-cream/5 border hover:border-none  text-white bg-[#ffffff10] hover:bg-[#c4d6fc] rounded-lg p-4 transition-all ${className} hover:cursor-pointer hover:transition ease-in-out px-8 py-8 h-fit`}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        {!right && children}
        <div
          className={`flex flex-col gap-1 xl:gap-2 ${
            right ? 'mb-4 xl:mb-7' : 'mt-4 xl:mt-7'
          }`}
        >
          <div className='text-2xl sm:text-4xl font-semibold xl:text-[42px]'>
            {name}
          </div>
          <div className='font-DMSans font-light sm:text-xl'>{description}</div>
        </div>
        {right && children}
      </div>
    </a>
  );
}
