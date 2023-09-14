import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';

export default function App() {
  return (
    <div className='bg-black'>
      <NavBar />
      <LandingPage />
      <AboutMe />
    </div>
  );
}
