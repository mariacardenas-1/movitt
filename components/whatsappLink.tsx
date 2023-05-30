import Link from "next/link";
import Image from "next/image";
import whatsapp from '../public/assets/whatsappIcon.png'

export default function WhatsappLink () {
    return (
        <Link className='p-3 fixed bottom-16 right-0 md:right-4 sm:bottom-36 lg:bottom-40 lg:right-48' target='_blank' href={'https://wa.link/o3s2ib'} >
            <Image className='w-10 h-10' src={whatsapp} alt="whatsapp"/>
        </Link>
    )
}