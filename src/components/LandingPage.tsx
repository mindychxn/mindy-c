import './landingpage.css';
import profilePic from '../assets/JavaScript frameworks-amico.svg'
export default function LandingPage() {
  return (
    <div className='landing-page flex items-center justify-center gap-4 relative h-screen'>
      <div className='flex flex-col'>
        <div className='name-text text-7xl font-bold z-10 bg-clip-text bg-gradient-to-tr from-[#f1cefc] via-white to-[#fed4c7] text-transparent p-4'>
          Hi there, I'm Mindy.
        </div>
        {/* <div className='text-white font-montserrat font-light z-10'>
          I'm a software Developer 
        </div> */}
      </div>
      <img className='w-1/3 animate-float' src={profilePic} alt='' />
    </div>
  );
}
