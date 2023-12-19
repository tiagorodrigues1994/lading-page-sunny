

export default function Depoimento({img, depoimento, name, position}){
    return(
        <div className='flex flex-col items-center text-center mb-16'>
            <img className='w-[72px] rounded-full' src={img} alt="Foto" />
            <p className='my-8 font-Barlow text-Very-dark-grayish-blue px-4 max-w-[400px]'>{depoimento}</p>
            <h3 className='font-Fraunces text-[18px] text-Very-dark-desaturated-blue'>{name}</h3>
            <p className='text-Grayish-blue font-Barlow text-[14px]'>{position}</p>
        </div>
    )
}