import React from 'react'
import TextBtn from '../shared/TextBtn'
import card from '../assets/card.png'

const CardPaypal = () => {
  return (
    <div className='w-10/12 m-auto sm:flex sm:justify-between gap-10' id='cardPaypal' >
        <div>
            <TextBtn 
                title="Find a better card deal in few easy steps."
                text="Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau."
                btn="Get Started"
             />
        </div>
        <div className='mt-8 sm:mt-0'>
            <img src={card} alt="card" className='w-10/12 m-auto' />
        </div>

    </div>
  )
}

export default CardPaypal