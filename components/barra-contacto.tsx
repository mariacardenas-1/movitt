import Link from "next/link";
import Image from "next/image";
import telefono from '../public/assets/telefonoIcon.png'
import whatsapp from '../public/assets/whatsappIcon.png'

export default function BarraContacto () {
    return (
        <div className=" justify-center md:mt-48 desk:mt-40 2xl:mt-24 px-5 gap-2.5 desk:px-80 lg:px-20 flex flex-col lg:flex-row items-center lg:justify-between bg-movittBlue text-white max-w-full h-36 font-semibold text-base lg:text-xl">
            Un equipo profesional a su servicio
            <Link href='tel:%20+573003197386%20'>
                <button className="flex p-2 font-saemibold hover:font-bold text-sm lg:text-lg rounded-lg border-2 border-gray-200 text-gray-200 hover:text-movittBlue hover:bg-white hover:border-white">
                    <Image className='w-6 h-6 mx-2 mt-1' src={telefono} alt="Telefono"/>
                    Llamar ahora
                </button>
            </Link>
            <Link target='_blank' href='https://wa.link/o3s2ib'>
                <button className="flex lg:w-60 p-2 font-saemibold hover:font-bold text-sm lg:text-lg rounded-lg border-2 border-gray-200 text-gray-200 hover:text-movittBlue hover:bg-white hover:border-white">
                    <Image className='w-6 h-6 mx-2 mt-1' src={whatsapp} alt="WhatsApp"/>
                    Envianos un mensaje
                </button>
            </Link>
            
        </div>
    )
}