import burgerMenu from '../assets/icon-hamburger.svg'
import { useState } from 'react'
export default function NavBar() {

    const[menuClicked, setMenuClicked] = useState(false)
    const handleClick = () =>{
        setMenuClicked((state)=>!state)
  }
console.log(menuClicked)

    return (
        <nav className='  sm:h-[24px] '>
            <ul className= {`${menuClicked ? 'flex' : 'hidden' } bg-white w-[329px] h-[305px] absolute top-[106px] left-0 right-0 mx-auto z-10 flex-col place-content-between py-[39px] items-center text-Dark-grayish-blue text-xl 
      
      after:content-[""] after:absolute after:top-[-24px] after:right-0 after:border-[12px] after:border-white after:border-t-transparent after:border-l-transparent 
      
      tablet:after:hidden tablet:bg-transparent tablet:relative tablet:flex tablet:flex-row tablet:h-full tablet:top-0 tablet:w-[400px] tablet:py-0 sm:text-White 
      
      lg:w-[490px]`} >
                <li className='cursor-pointer '>About</li>
                <li className='cursor-pointer '>Services</li>
                <li className='cursor-pointer '>Projects</li>
                <li className='cursor-pointer bg-Yellow w-[140px] h-[56px] grid place-content-center rounded-full font-Fraunces text-Very-dark-desaturated-blue 
                uppercase sm:bg-white sm:hover:bg-opacity-25 sm:hover:text-white'>Contact</li>
            </ul>
            <div className='cursor-pointer tablet:hidden' onClick={handleClick}>
                <img src={burgerMenu} alt="menu hamburger" />
            </div>
        </nav>
    )
}


