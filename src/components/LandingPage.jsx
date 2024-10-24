import React from 'react'
import Logo from '../assets/images/logo.svg'
import EmailComponent from './EmailComponent'
import illustration from '../assets/images/illustration-dashboard.png'


const LandingPage = () => {
  return (
    <div className='max-w-2xl h-full flex flex-col items-center lg:gap-3 gap-2 py-5' >
        <img src={Logo} alt="logo" className='min-w-sm max-w-16 mb-5'/>
        <h1 className='text-Gray font-light lg:text-4xl text-2xl'> We are launching <span className='text-Very-Dark-Blue font-bold'>soon!</span> </h1>
        <h3 className='font-light lg:text-base text-sm text-Very-Dark-Blue mb-5'>Subscribe and get notified</h3>
        <EmailComponent/>
        <img src={illustration} alt="" className='lg:max-w-lg mb-10 lg:mt-4 mt-10 max-w-xs'/>
        <div className='grid grid-cols-3 gap-4 mb-5'>
            <a href="/" className='flex justify-center items-center rounded-full border border-Pale-Blue  p-2 text-Blue hover:bg-Blue hover:text-[#fff] transition-all duration-200'> <i class="fa-brands fa-facebook-f"></i></a>
            <a href="/" className='flex justify-center items-center rounded-full border border-Pale-Blue  p-2 text-Blue hover:bg-Blue hover:text-[#fff] transition-all duration-200'><i class="fa-brands fa-twitter"></i></a>
            <a href="/" className='flex justify-center items-center rounded-full border border-Pale-Blue  p-2 text-Blue hover:bg-Blue hover:text-[#fff] transition-all duration-200'><i class="fa-brands fa-instagram"></i></a>
        </div>
        <p className='text-xs text-Gray'>
        &copy; Copyright Ping. All rights reserved.
        </p>
        
    </div>
  )
}

export default LandingPage