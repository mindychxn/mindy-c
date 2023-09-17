import React from 'react';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';

export default function App() {
  return (
    <div className='bg-black min-w-min'>
      <NavBar sections={['Home', 'Projects', 'About', 'Contact', 'Resume']} collapsed={false} className='hidden lg:block' />
      <NavBar sections={['Home', 'Projects', 'About', 'Contact', 'Resume']} collapsed className='block lg:hidden' />
      <LandingPage />
      <Projects />
      <AboutMe />
    </div>
  );
}
