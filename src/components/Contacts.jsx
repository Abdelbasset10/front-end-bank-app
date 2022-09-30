import React from 'react'
import styles from '../Styles'
const Contacts = () => {
  return (
    <div className='w-10/12 m-auto bg-black-gradient-2 md:flex md:justify-between md:items-center py-4 px-8 my-20'>
        <div>
            <h1  className=' text-3xl ss:text-5xl text-white font-poppins'>Let’s try our service now!</h1>
            <p className={`${styles.paragraph} max-w-lg	my-8 text-base sm:text-lg	`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
        <button className='py-2 px-4 bg-secondary rounded-lg'>Get Started</button>

    </div>
  )
}

export default Contacts