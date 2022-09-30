import React from 'react'
import styles from '../Styles'
import {testimonials} from '../constants'
import quotes from '../assets/quotes.svg'

const Testimonials = () => {
  return (
    <div className='w-10/12  my-20 mx-auto relative' >
            <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

        <div className='md:flex justify-between items-center gap-10' >
            <h1 className='text-3xl mb-10 md:mb-0 md:text-5xl text-white font-poppins' >What people are saying about us</h1>
            <p className={`${styles.paragraph}text-lg md:w-3/4 m-auto`} >Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>

        <div className='md:flex  justify-between items-center gap-10 mt-20' >
            {testimonials.map((item)=>{
                return(
                    <div key={item.id} className="  py-4 px-4 h-72  flex-1 mt-10 md:mt-0 feedback-card  cursor-pointer rounded-3xl relative	">
                        <img src={quotes} alt="quotes" />
                        <p className={`${styles.paragraph} my-10 text-base`} >{item.text}</p>
                        <div className='flex  items-center gap-4 absolute bottom-4 ' >
                            <img src={item.img} alt="img" className='w-10' />
                            <div>
                                <h2 className='text-white' >{item.name}</h2>
                                <p className='text-white opacity-50' >{item.grad}</p>
                            </div>
                        </div>
                </div>
            )
        })}
        </div>
 
    </div>
  )
}

export default Testimonials