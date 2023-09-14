import './landingpage.css';
import profilePic from '../assets/landingPage.svg';
export default function LandingPage() {
  return (
    <div className='landing-page flex items-center justify-center gap-14 relative h-screen'>
      <div className='flex flex-col w-[40%] p-10'>
        <div
          className='font-semibold z-10 text-[#f8f6e5] text-5xl pl-[17px]'
        >
          Hi there,
        </div>
        <div className='name-text font-bold text-8xl z-10 bg-clip-text bg-gradient-to-tr from-[#ffbdfc] via-[#f8f6e5] to-[#f9c8b9] text-transparent p-4'>
          I'm Mindy.
        </div>
        <div className='text-cream tracking-[0.0125em] font-DMSans text-xl font-light z-10 pl-[17px] mt-5'>
          As a software developer, I aim to create impactful and innovative
          solutions.
        </div>
      </div>
      <img
        className='w-1/3 animate-float drop-shadow-[1px_5px_10px_rgba(255,252,241,0.5)] drop'
        src={profilePic}
        alt=''
      />
    </div>
  );
}
