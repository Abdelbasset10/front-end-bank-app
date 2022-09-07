import React from 'react'
import robot from '../assets/robot.png'
import discount from '../assets/Discount.svg'
import styles from '../Styles'
import { hero } from '../constants'

const Hero = () => {
  return (
    <div className='w-10/12  mx-auto relative' id='hero' >
        <div  className='flex flex-col  md:flex-row justify-between' >
            <div className='text-white mt-20' >
                <div className='flex items-center gap-4 bg-discount-gradient w-fit px-4 rounded-xl mb-8	' >
                    <img src={discount} alt="sicount" />
                    <p className={`${styles.paragraph}`} > <span className='text-white' >20%</span> DISCOUNT FOR <span className='text-white'>1 MONTH</span> ACCOUNT</p>
                </div>
                <h1 className='text-5xl md:text-6xl md:leading-tight			 font-poppins font-semibold mb-8' >The Next <span className='text-secondary' >GENERATION</span> PAYEMENT METHODE</h1>
                <p className={`${styles.paragraph} `} >Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
                    We examine annual percentage rates, annual fees.</p>

            </div>

            <div className='mt-8 md:mt-0 relative ' >
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
                <img src={robot} alt="robot" className='w-full h-full z-10	 ' />
            </div>
        </div>

        <div className='flex  flex-wrap gap-4 justify-between items-center mt-4' >
            {hero.map((item)=>{
                return(
                    <div key={item.id} className=" flex - justify-between items-center gap-2 text-white" >
                        <p className=' text-2xl md:text-4xl	' >{item.number}</p>
                        <p className='text-base md:text-xl text-secondary	' >{item.act}</p>
                    </div>
                )
            })}
        </div>

    </div>
  )
}

export default Hero