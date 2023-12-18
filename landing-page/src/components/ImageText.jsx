export default function ImageText({order, text, imgMobile, imgDesktop, title}){
    return(
    // <div className={`${order} relative pt-[398px] sm:pt-[350px] tablet:pt-[150px] desktop:pt-[398px] `}>
    //      <picture  className="absolute top-0 z-[-1]">
    //     <source media="(max-width:639px)" srcSet={imgMobile} />
    //     <source media="(min-width:640px)" srcSet={imgDesktop} />
    //     <img src={imgMobile} alt="service image" />
    //    </picture>
    //    <h2 className='text-center font-Fraunces text-[28px] text-Dark-desaturated-cyan mb-7'>{title}</h2>
    //    <p className='text-center  font-Barlow text-Dark-desaturated-cyan mx-3 mb-[60px] tablet:text-sm  lg:max-auto desktop:w-[300px]'>{text }</p>
    // </div>

    <div className={`${order} relative pt-[398px] sm:pt-[350px] tablet:pt-[150px] md:pt-[160px] lg:pt-[250px] xl:pt-[350px] desktop:pt-[398px]`}>
          <picture className="absolute z-[-1] top-0">
            <source media='(max-width:639px)' srcSet={imgMobile} />
            <source media='(min-width:640px)' srcSet={imgDesktop} />
            <img src={imgMobile} alt="Imagen principal" />
          </picture>
          <h2 className="text-center font-Fraunces text-[28px] text-Dark-desaturated-cyan mb-7">{title}</h2>
          <p className="text-center font-Barlow text-Dark-desaturated-cyan mx-3 mb-[60px] tablet:text-sm desktop:w-[300px] desktop:mx-auto">{text}</p>
        </div>
    )
}