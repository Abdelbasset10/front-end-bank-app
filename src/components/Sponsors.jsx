import React from 'react'
import { sponsors } from '../constants'

const Sponsors = () => {
  return (
    <div className='w-10/12 m-auto flex justify-center md:justify-between flex-wrap  gap-10 items-center '>
        {sponsors.map((sponsor)=>{
            return (
                <div key={sponsor.id} >
                    <img src={sponsor.img} alt="" className='w-40' />
                </div>
            )
        })}
        
        
    </div>
  )
}

export default Sponsors