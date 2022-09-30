import React from 'react'
import logo from '../assets/logo.svg'
import instagram from '../assets/instagram.svg'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import linkedin from '../assets/linkedin.svg'


const Footer = () => {
  return (
    <div className='w-full m-auto bg-footer py-8 ' >
      <div className='flex justify-between flex-wrap gap-8 border-b-2 border-neutral-600	 pb-4 w-10/12 m-auto	' >
          <div>
              <img src={logo} alt="log" className='w-32' />
              <p className='text-white opacity-50 mt-4' >A new way to make the payments easy, reliable and secure.</p>
          </div>
          <div>
            <h2 className='text-white' >Usefull Links</h2>
            <p className='text-white opacity-50'>Content</p> 
            <p className='text-white opacity-50'>How it Works</p> 
            <p className='text-white opacity-50'>Create</p>
            <p className='text-white opacity-50'>Explore</p>
            <p className='text-white opacity-50'>Terms & Services</p>
          </div>
          <div>
            <h2 className='text-white'>Community</h2>
            <p className='text-white opacity-50'>Help Center</p>
            <p className='text-white opacity-50'>Partners</p>
            <p className='text-white opacity-50'>Suggestions</p>
            <p className='text-white opacity-50'>Blog</p>
            <p className='text-white opacity-50'>Newsletters</p>
          </div>
            <div>
                <h2 className='text-white'>Partner</h2>
                <p className='text-white opacity-50'>Our Partner</p>
                <p className='text-white opacity-50'>Become a Partner</p>
            </div>
      </div>

      <div className='flex flex-col ss:flex-row justify-between items-center w-10/12  my-4 mx-auto' >
        <p className='text-white mb-4 ss:mb-0'>@2022 Abdelbasset-2022 </p>
        <div className='flex justify-content items-center gap-4' >
          <img src={instagram} alt="instagram" className='cursor-pointer' />
          <img src={facebook} alt="facebook" className='cursor-pointer'  />
          <img src={twitter} alt="twitter" className='cursor-pointer'  />
          <img src={linkedin} alt="linkedin" className='cursor-pointer'  />

        </div>

      </div>
      </div>
  )
}

export default Footer