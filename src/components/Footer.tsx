import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black text-gray-400 py-12 bottom-0 left-0 w-full  '>
    <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:;px-6 lg:px-8'>
      <div>
        <h3 className='text-lg font-bold text-white mb-4'>About Us</h3>
        <p>Dive into our comprehensive coding courses andtransform your development journey today. Whether you are a beginner or looking to refine your programming skills. Join us to unlock your true coding potential.</p>
      </div>
      <div>
        <h3 className='text-lg font-bold text-white mb-4'>
            Links
        </h3>
        <ul>
            <li><a href="/" className='hover:text-slate-200'>Home</a></li>
            <li><a href="/courses" className='hover:text-slate-200'>Courses</a></li>
            <li><a href="/about" className='hover:text-slate-200'>About</a></li>
            <li><a href="/contact" className='hover:text-slate-200'>Contact</a></li>
        </ul>
      </div>
      <div>
        <h3 className='text-lg font-bold text-white mb-4'>Follow Us</h3>
        <ul>
            <li><a href="https://www.facebook.com/profile.php?id=100095077998396" className='hover:text-slate-200'>Facebook</a></li>
            <li><a href="https://www.linkedin.com/in/muhammad-zaeem-saeed-7ba52a322/" className='hover:text-slate-200'>LinkedIn</a></li>
            <li><a href="https://github.com/MuhammadZaeem92336" className='hover:text-slate-200'>GitHub</a></li>
            <li><a href="https://vercel.com/muhammad-zaeems-projects" className='hover:text-slate-200'>Vercel</a></li>
        </ul>
      </div>
      <div>
        <h3 className='text-lg font-bold text-white mb-4'>Contact Us</h3>
        <p>Email :<a href="/.mail@gmail.com"><span className='hover:text-white hover:underline'> zaeem.elegantbiz@gmail.com</span></a></p>
        <p>Phone  :<span className='hover:text-white hover:cursor-pointer hover:underline'><br /> 0311-4533459</span></p>
      </div>
      <div className='text-black justift-left'>
        <p>. <br />.</p>
      </div>
    </div>
    <p className='flex justify-center p-2 text-white'>© 2024 Zaeem | Convert Your Theme Into Code | All Rights Reserved</p>
    </footer>
  )
}

export default Footer;
