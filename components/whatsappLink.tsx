import Link from "next/link";
import Image from "next/image";
import whatsapp from '../public/assets/whatsappIcon.png'

export default function WhatsappLink () {
    return (
        <Link className='p-4 fixed bottom-0 right-0 desk:bottom-24 desk:right-24' target='_blank' href={'https://wa.link/o3s2ib'} >
            <Image className='w-20 h-20 desk:w-16 desk:h-16' src={whatsapp} alt="whatsapp"/>
        </Link>
    )
}