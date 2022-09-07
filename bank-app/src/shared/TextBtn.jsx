import React from 'react'
import styles from '../Styles'

const TextBtn = ({title,text,btn}) => {
  return (
    <div>
        <h1 className='  text-3xl xs:text-4xl sm:text-5xl font-poppins text-white ' >{title}</h1>
        <p className={`${styles.paragraph} leading-5 text-xs xs:text-base	 sm:text-lg sm:leading-8	  my-8`} >{text}</p>
        <button className='py-2 px-4 bg-secondary rounded-lg h-12	' >{btn}</button>
    </div>
  )
}

export default TextBtn