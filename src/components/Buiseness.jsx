import React from 'react'
import TextBtn from '../shared/TextBtn'
import { buiseness } from '../constants'
import styles ,{layout} from '../Styles'

const Buiseness = () => {
  return (
    <div className='w-10/12 m-auto md:flex  md:justify-between my-20 gap-8' id='buis' >
        <div>
            <TextBtn
             title="You do the business, we’ll handle the money"
             text="With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market."
             btn="Get Started"
             />
        </div>

        <div className='flex flex-col gap-4 mt-8 md:mt-0' >
            {buiseness.map((item)=>{
                return(
                    <div key={item.id} className="flex items-start feedback-card py-2 px-4 cursor-pointer rounded-3xl	 gap-4 " >
                        <div className='p-2 bg-green opacity-50 rounded-lg mt-2' >
                            <img src={item.img} alt="image" className='w-full h-full' />
                        </div>
                        
                        <div>
                            <h2 className='text-white' >{item.title}</h2>
                            <p className={`${styles.paragraph}  text-xs leading-5	 md:text-sm md:leading-6		`} >{item.text}</p>
                        </div>
                    </div>
                )
            })}

        </div>

    </div>
  )
}

export default Buiseness