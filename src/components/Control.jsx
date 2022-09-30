import React from 'react'
import bill from '../assets/bill.png'
import apple from '../assets/apple.svg'
import google from '../assets/google.svg'
import styles from '../Styles'

const Control = () => {
  return (
    <div className='w-10/12  my-20 mx-auto flex flex-col-reverse	 sm:flex-row sm:items-center sm:justify-between gap-10 relative' id='bill' >
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        <div>
            <img src={bill} alt="" />
        </div>
        <div className='mt-8 sm:mt-0' >
            <h1 className='  text-3xl xs:text-4xl sm:text-4xl md:text-6xl sm:leading-snug text-white font-poppins ' >Easily control your billing & invoicing.</h1>
            <p className={`${styles.paragraph} my-4 text-xs sm:text-lg` }>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
            <div className='flex items-center gap-4' >
                <img src={apple} alt="" />
                <img src={google} alt="" />
            </div>
        </div>

    </div>
  )
}

export default Control