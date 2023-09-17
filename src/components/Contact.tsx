import React, { FormEvent, useRef } from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(formRef.current!);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    })
      .then(async response => {
        if (response.status === 200) {
          resultRef.current!.innerHTML = 'Thank you for your message!';
        }
      })
      .catch(error => {
        resultRef.current!.innerHTML = 'Sorry, something went wrong!';
      })
      .finally(function () {
        formRef.current!.reset();
      });
  };
  return (
    <section id='contact'>
      <div className='contact bg-black flex flex-col justify-between'>
        <div className='flex flex-col gap-8 justify-center items-center pt-20 pb-10'>
          <div className='font-bold text-[44px] sm:text-6xl xl:text-7xl bg-clip-text bg-gradient-to-tr from-[#9246de] via-[#f1e8ff] to-[#fbaf94] text-transparent'>
            Contact
          </div>
          <div className='font-DMSans sm:text-xl xl:text-2xl font-light text-white w-2/3 text-center'>
            Thanks for getting to know me! I'd love to get to know you too.
            Please feel free to send me a message.
          </div>
          <form
            ref={formRef}
            method='POST'
            onSubmit={e => submitHandler(e)}
            className='flex flex-col items-center w-3/4 md:w-2/3 lg:w-1/2 backdrop-blur-md border-cream/5 border text-white bg-[#ffffff10] rounded-lg p-4 z-50 px-8 py-8 h-fit'
          >
            <input
              type='hidden'
              name='access_key'
              value='58726541-64ce-400c-8a59-47ad5a5b4cb3'
            />
            <input
              type='hidden'
              name='redirect'
              value='https://web3forms.com/success'
            />
            <input
              type='hidden'
              name='redirect'
              value='https://yourwebsite.com/thanks.html'
            ></input>
            <input
              name='name'
              type='text'
              className='mb-4 focus:outline-none focus:ring-1 focus:ring-white/50 w-full rounded-lg px-5 py-4 bg-white/10 font-DMSans font-light placeholder:text-white/70 text-cream'
              placeholder='Name'
              required
            />
            <input
              name='email'
              type='email'
              className='mb-4 focus:outline-none focus:ring-1 focus:ring-white/50 w-full rounded-lg px-5 py-4 bg-white/10 font-DMSans font-light placeholder:text-white/70'
              placeholder='Email Address'
              required
            />
            <textarea
              name='message'
              className='mb-4 resize-none focus:outline-none focus:ring-1 focus:ring-white/50 w-full rounded-lg px-5 py-4 bg-white/10 font-DMSans font-light placeholder:text-white/70'
              rows={5}
              placeholder='Message'
              required
            />
            <button
              type='submit'
              className='font-DMSans font-light tracking-wider hover:scale-[1.02] hover:-translate-y-1 hover:drop-shadow-[1px_1px_5px_#ffffff69] transtion-all duration-500 mt-4 w-1/2 rounded-full px-5 py-4 bg-gradient-to-r from-indigo-500 to-[#ff6abc] outline-cream/10 outline'
            >
              Submit
            </button>
            <div
              className='font-light font-DMSans text-sm tracking-wide text-[#ffffffb5]'
              ref={resultRef}
            />
          </form>
        </div>
        <div className='w-full text-3xl flex justify-center md:justify-end gap-6 pb-6 px-6 text-cream/90'>
          <a
            href='mailto:mindychxn@gmail.com'
            target='_blank'
            rel='noreferrer'
            className='hover:scale-110 transition-all duration-300 hover:drop-shadow-glow'
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a
            href='https://github.com/mindychxn'
            target='_blank'
            rel='noreferrer'
            className='hover:scale-110 transition-all duration-300 hover:drop-shadow-glow'
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href='https://www.linkedin.com/in/mindy-chen-a689b4260/'
            target='_blank'
            rel='noreferrer'
            className='hover:scale-110 transition-all duration-300 hover:drop-shadow-glow'
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </div>
    </section>
  );
}
