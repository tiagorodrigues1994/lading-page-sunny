export default function Text({ order, title, text, color }) {


  return (
  
<div className={`${order} text-center px-6 flex flex-col place-content-around py-6 h-[437px] tablet:h-auto tablet:px-6
        lg:px-[65px]
        desktop:pl-[165px] desktop:pr-[105px] desktop:py-[140px] desktop:text-left`}>
            <h2 className='font-Fraunces text-[2rem] font-black tablet:text-[1.5rem] lg:text-[2.5rem] desktop:leading-tight'>{title}</h2>
            <p className="font-Barlow text-Dark-grayish-blue text-[1.125rem] leading-[1.875rem] tablet:text-[0.8rem] tablet:leading-[1.5rem]
            lg:text-[18px]">
                {text}
            </p>
            <div className="relative">
                <button className="font-Fraunces uppercase lg:text-lxl">Learn more</button>
                <div className={`${color} bg-opacity-25 w-[137px] h-[10px] absolute bottom-0 -z-10 rounded-full left-0 right-0 mx-auto 
        desktop:mx-0 desktop:left-[-10px]`}></div>
            </div>
        </div>



  )
}

