import React , {useState} from 'react'
import { navList } from '../constants'
import logo from '../assets/logo.svg'
import bars from '../assets/menu.svg'
import close from '../assets/close.svg'

const Navbar = () => {
    const [toggle,setToggle] = useState(false)

    const handleToggle = () =>{
        setToggle(!toggle)
    }

    const hendleClose = () =>{
        setToggle(false)
    }

  return (
    <nav className='w-10/12 m-auto py-4 flex items-center justify-between relative' >
        <img src={logo} alt="HooBank" className='w-32' />
        <ul className='flex gap-8 invisible sm:visible' >
            {navList.map((item)=>{
                return(
                    <li key={item.id} className ="text-white"  > 
                        <a href={item.goTo}> {item.link} </a>
                     </li>
                )
            })}
        </ul>
        <div className=' sm:invisible absolute right-0'>
            <img src={toggle ? close:bars} alt="menu" onClick={handleToggle} />
            {toggle && (
                <ul className='absolute top-8 right-0 flex flex-col gap-4 py-2 feedback-card w-32 z-10 '>
                {navList.map((item)=>{
                    return(
                        <li key={item.id} className ="text-white text-center" onClick={hendleClose} > 
                            <a href={item.goTo}> {item.link} </a>
                         </li>
                    )
                })}
                </ul>
            )}
        </div>

    </nav>
  )
}

export default Navbar