import Depimento from "./Depoimento"
import emilyPhoto from '../assets/image-emily.jpg'
import thomasPhoto from '../assets/image-thomas.jpg'
import jenniePhoto from '../assets/image-jennie.jpg'
export default function DepimentoContainer() {
    return (
        <section className='bg-white pt-16 '>
        <h2 className='text-center uppercase font-Fraunces mb-16 text-Grayish-blue '>Client testimonials</h2>
        <div className='desktop:flex desktop:w-[900px]        desktop:mx-auto xl:w-[1110px]'>
            <Depimento
            img={emilyPhoto}
            depoimento='We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.'
            name='Emily R.'
            position='Marketing Director'
            />

            <Depimento
            img={thomasPhoto}
            depoimento='Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.'
            name='Thomas S.'
            position='Chief Operating Officer'
            />

            <Depimento
            img={jenniePhoto}
            depoimento='Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!'
            name='Jennie F.'
            position='Business Owner'
            />
        </div>
    </section>

    )
}