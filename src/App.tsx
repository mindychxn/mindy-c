import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import Introduction from './components/Introduction';
import { useState } from 'react';

export default function App() {
  return (
    <div className='bg-black'>
      <NavBar />
      <LandingPage />
      <Introduction />
    </div>
  );
}
