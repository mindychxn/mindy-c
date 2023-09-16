import React from 'react';
import './projectcard.css';

export interface ProjectCardProps {
  children?: React.ReactNode;
  name: string;
  description: string;
  onMouseOver(): void;
  onMouseOut(): void;
  right: boolean;
  className?: string;
}

export default function ProjectCard({
  children,
  name,
  description,
  onMouseOver,
  onMouseOut,
  right,
  className = '',
}: ProjectCardProps) {
  return (
    <div
      className={`project-card flex flex-col w-full backdrop-blur-md border-cream/5 border hover:border-none  text-white bg-[#ffffff10] hover:bg-[#c4d6fc] rounded-lg p-4 transition-all ${className} hover:cursor-pointer hover:transition ease-in-out z-[100] px-8 py-8 h-fit`}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {!right && children}
      <div className={`flex flex-col gap-1 ${right ? 'mb-4' : 'mt-4'}`}>
        <div className='text-2xl sm:text-4xl font-semibold'>{name}</div>
        <div className='font-DMSans font-light sm:text-xl'>{description}</div>
      </div>
      {right && children}
    </div>
  );
}
