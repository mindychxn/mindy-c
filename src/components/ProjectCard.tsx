import React from 'react';

export interface ProjectCardProps {
  children?: React.ReactNode;
  name: string;
  description: string;
  onMouseOver(): void;
  onMouseOut(): void;
  className?: string;
}

export default function ProjectCard({
  children,
  name,
  description,
  onMouseOver,
  onMouseOut,
  className = '',
}: ProjectCardProps) {
  return (
    <div
      className={`flex flex-col gap-4 w-full backdrop-blur-md border-cream/5 border text-white bg-[#ffffff10] rounded-lg p-4 transition-all ${className} hover:shadow-[0px_0px_20px_#f8f6e5b3] hover:animate-glow hover:scale-105 hover:transition-all`}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {children}
      <div className='flex flex-col'>
        <div className='text-3xl font-semibold'>{name}</div>
        <div className='font-DMSans font-light'>{description}</div>
      </div>
    </div>
  );
}
