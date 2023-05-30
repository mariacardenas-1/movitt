import Link from "next/link";
import Image from "next/image";
import whatsapp from '../public/assets/whatsappIcon.png'

export default function WhatsappLink () {
    return (
        <Link className='p-3 fixed bottom-24 right-0 lg:bottom-24 lg:right-24' target='_blank' href={'https://wa.link/o3s2ib'} >
            <Image className='w-10 h-10' src={whatsapp} alt="whatsapp"/>
        </Link>
    )
}