import imgMobile from '../assets/mobile/image-header.jpg'
import imgDesktop from '../assets/desktop/image-header.jpg'
import arrow from '../assets/icon-arrow-down.svg'

export default function Main() {
    return (
        <section>
            <picture>
            <source media='(max-width:639px)' srcSet={imgMobile} />
        <source media='(min-width:640px)' srcSet={imgDesktop} />
        <img src={imgMobile} alt="Imagen principal" />
        </picture>
      <p className='absolute top-[144px] w-[327px] font-Fraunces font-black text-[40px] uppercase tracking-[6.25px] text-White text-center left-0 right-0 mx-auto sm:w-[600px] xl:text-[56px] xl:w-[750px] xl:top-[191px] xl:tracking-[8.75px]'>We are creatives</p>
      <img className='absolute top-[294px] left-0 right-0 mx-auto sm:top-[220px] xl:top-[360px]' src={arrow} alt="arrow down" />
    </section>

    )
}