import Layout from "../components/layout"
import TextSection from "../components/textSection"
import Image from "next/image"
import LinkSection from "../components/linkSection"
import Link from "next/link"
import map from '../public/assets/mapa.png'

export default function Contactenos () {

    return (
        <Layout>
            <div className="bg-movittBlue md:mb-10 h-full text-white md:bg-white md:text-black">
                <TextSection tittle={'Contáctenos'} text={''}/>
            
        <div className="bg-movittBlue md:mx-16 lg:mx-28 lg:p-5 rounded-lg flex flex-col lg:flex-row">
            <div className="text-white lg:w-3/5 md:text-lg py-0 md:pt-16 lg:pt-8 p-8 lg:p-10 md:p-16">
                <p className="font-bold pb-5 md:pb-4 text-yellow-300 md:text-center text-3xl">
                   MOVITT SAS
                </p>
                <p className="md:font-bold md:text-xl">
                    Póngase en contacto con nosotros a través de los siguientes medios:
                </p>
                <div className="p-2 md:p-5">
                    <LinkSection text='Habla con nuestro equipo ' src="tel:%20+573003197386%20" linkText="300 319 7386"/>
                    <LinkSection text='Escribenos por WhatsApp: ' src="https://wa.link/o3s2ib" linkText="3132974878"/>
                    <LinkSection text='Envianos un correo: ' src="mailto:movittingenieria@gmail.com" linkText="movittingenieria@gmail.com"/>
                    <p className="font-semibold text-yellow-300">
                        Visitanos en:
                    </p>
                    <LinkSection src="https://www.google.com/maps/place/Cra.+16b+%23164-46,+Usaqu%C3%A9n,+Bogot%C3%A1/@4.744278,-74.037962,18z/data=!4m6!3m5!1s0x8e3f8578f3d2a749:0xf674e18c752f6dc1!8m2!3d4.7441874!4d-74.0382786!16s%2Fg%2F11kbtgyzx0?hl=es-419&entry=ttu" linkText=" ° Carrera 16B #164 – 46 oficina 207 Bogotá – Colombia"/>
                    <LinkSection linkText=" ° KM 5.5 vía Tunja – Paipa"/>
                </div>
            </div>
            <div className="m-5 lg:flex lg:content-center lg:flex-wrap md:mx-auto md:mb-10 lg:w-2/5 md:pt-0 lg:pt-8 hover:cursor-pointer overflow-hidden ">
                <Link target="_blank" href={'https://www.google.com/maps/place/Cra.+16b+%23164-46,+Usaqu%C3%A9n,+Bogot%C3%A1/@4.744278,-74.037962,18z/data=!4m6!3m5!1s0x8e3f8578f3d2a749:0xf674e18c752f6dc1!8m2!3d4.7441874!4d-74.0382786!16s%2Fg%2F11kbtgyzx0?hl=es-419&entry=ttu'}>
                    <Image className=' hover:scale-105 hover:opacity-100 rounded border-2 opacity-90 border-neutral-100' src={map} alt="..." />
                </Link>
            </div>
        </div>
        </div>
        </Layout>
    )
}