import Layout from "../components/layout"
import TextSection from "../components/textSection"
import TableValue from "../components/tableValues"
import WhatsappLink from "../components/whatsappLink"
import { HOME_OG_IMAGE_URL } from '../lib/constants'
import Head from 'next/head'


export default function NuestroEquipo () {
    return (
        <Layout>
            <Head>
                <title>Movitt SAS | Personal especializado en el desarrollo de proyectos urbanos y regionales.</title>
                <meta property="og:image" content={HOME_OG_IMAGE_URL} />
            </Head>
            <TextSection 
              tittle={'Nuestro Equipo'} 
              text={'La capacidad de nuestra compañía permite ofrecer servicios integrales en estudios, diseños e interventoría de proyectos de transporte, tránsito e infraestructura, conformado por personal especializado, con experiencia y disposición de ofrecer las mejores alternativas en el campo de evaluación y análisis para el desarrollo de proyectos urbanos y regionales de carácter público o privado.'} />
            <div className="pb-10">
                <TableValue />
            </div>
            <WhatsappLink />
        </Layout>
    )
}