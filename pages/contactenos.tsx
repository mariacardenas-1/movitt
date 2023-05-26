import Layout from "../components/layout"
import TextSection from "../components/textSection"
import Image from "next/image"
import LinkSection from "../components/linkSection"
import Link from "next/link"
import map from '../public/assets/map.png'

export default function Contactenos () {
    return (
        <Layout>
        <TextSection tittle={'Contáctenos'} text={''}/>
        <div className="bg-movittBlue mx-40 rounded-lg flex flex-row">
            <div className="text-white w-3/5 text-lg p-16">
                <p className="font-bold text-2xl">
                    Póngase en contacto con nosotros a través de los siguientes medios:
                </p>
                <div className="p-5">
                    <LinkSection text='Habla con nuestro equipo ' src="tel:%20+573003197386%20" linkText="300 319 7386"/>
                    <LinkSection text='Envianos un correo: ' src="mailto:movittingenieria@gmail.com" linkText="movittingenieria@gmail.com"/>
                    <p className="font-semibold text-yellow-300">
                        Visitanos en:
                    </p>
                    <LinkSection src="https://www.google.com/maps/place/Cra.+16b+%23164-46,+Usaqu%C3%A9n,+Bogot%C3%A1/@4.744278,-74.037962,18z/data=!4m6!3m5!1s0x8e3f8578f3d2a749:0xf674e18c752f6dc1!8m2!3d4.7441874!4d-74.0382786!16s%2Fg%2F11kbtgyzx0?hl=es-419&entry=ttu" linkText=" ° Carrera 16B #164 – 46 oficina 207 Bogotá – Colombia"/>
                    <LinkSection linkText=" ° KM 5.5 vía Tunja – Paipa"/>
                </div>
            </div>
            <div className="m-5 w-2/5 hover:cursor-pointer overflow-hidden ">
                <Link target="_blank" href={'https://www.google.com/maps/place/Cra.+16b+%23164-46,+Usaqu%C3%A9n,+Bogot%C3%A1/@4.744278,-74.037962,18z/data=!4m6!3m5!1s0x8e3f8578f3d2a749:0xf674e18c752f6dc1!8m2!3d4.7441874!4d-74.0382786!16s%2Fg%2F11kbtgyzx0?hl=es-419&entry=ttu'}>
                    <Image className=' hover:scale-105 hover:opacity-100 rounded border-2 opacity-90 border-neutral-100' src={map} alt="..." />
                </Link>
            </div>
        </div>
        </Layout>
    )
}