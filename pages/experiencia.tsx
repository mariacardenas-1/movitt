import Layout from "../components/layout"
import {  Flowbite, Accordion } from "flowbite-react"
import TextSection from "../components/textSection"
import { theme } from '../components/customTheme'
import Gallery from "../components/gallery"
import señalizacion from '../public/assets/imagesExperince/señalizacion.jpg'
import santaRosa from '../public/assets/imagesExperince/santa-rosa.jpg'
import sogamoso from '../public/assets/imagesExperince/sogamoso.jpg'
import tunja from '../public/assets/imagesExperince/tunja.jpg'
import tunja2 from '../public/assets/imagesExperince/tunja2.jpg'
import seguridad from '../public/assets/imagesExperince/seguridad.jpg'
import seguridad2 from '../public/assets/imagesExperince/seguridad2.jpg'
import picasso from '../public/assets/imagesExperince/picasso.png'
import choachi from '../public/assets/imagesExperince/choachi.png'
import bosa from '../public/assets/imagesExperince/bosa.jpg'
import bogota from '../public/assets/imagesExperince/Bogota.jpg'
import pmt1 from '../public/assets/imagesExperince/pmt1.png'
import pmt2 from '../public/assets/imagesExperince/pmt2.png'
import pmt3 from '../public/assets/imagesExperince/pmt3.jpg'
import pmt4 from '../public/assets/imagesExperince/pmt4.jpg'
import dg from '../public/assets/imagesExperince/DG.png'
import fotogrametria1 from '../public/assets/imagesExperince/fotogrametria1.jpg'
import fotogrametria2 from '../public/assets/imagesExperince/fotogrametria2.jpg'
import redMod from '../public/assets/imagesExperince/Red-Mod.png'
import tres from '../public/assets/imagesExperince/3D.png'
import WhatsappLink from "../components/whatsappLink"
import { HOME_OG_IMAGE_URL } from '../lib/constants'
import Head from 'next/head'

export default function Experiencia () {
    const imagenes = {
        1: [señalizacion, sogamoso, santaRosa, tunja, tunja2 ],
        2: [seguridad, seguridad2 ],
        3: [picasso, choachi, bosa, bogota ],
        4: [pmt1, pmt2, pmt3, pmt4 ],
        5: [dg ],
        6: [fotogrametria1, fotogrametria2],
        7: [redMod, tres ],
    }
    return (
        <Layout>
            <Head>
                <title>Movitt SAS | Experiencia en diseño, estudio y planes de manejo de transito </title>
                <meta property="og:image" content={HOME_OG_IMAGE_URL} />
            </Head>
            <TextSection tittle={'Experiencia'} text={' '} />
            <div className=" desk:px-36 lg:px-24 md:px-14 px-19 mx-12 pb-7 mb-10 bg-neutral-50 rounded-lg md:mx-36">
                <Flowbite  theme={{ theme }}>
                    <Accordion flush={true}>
                        <Accordion.Panel>
                            <Accordion.Title>
                                Diseño e implementación de señalización vial
                            </Accordion.Title>
                            <Accordion.Content>
                                <Gallery imagenes={imagenes[1]}/>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                Campañas de seguridad vial
                            </Accordion.Title>
                            <Accordion.Content>
                                <Gallery imagenes={imagenes[2]}/>  
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                Estudios de tránsito
                            </Accordion.Title>
                            <Accordion.Content>
                                <Gallery imagenes={imagenes[3]}/>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                Planes de Manejo de Tránsito - PMT
                            </Accordion.Title>
                            <Accordion.Content>                        
                                <Gallery imagenes={imagenes[4]}/>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                Diseño geométrico y de pavimentos
                            </Accordion.Title>
                            <Accordion.Content>                        
                                <Gallery imagenes={imagenes[5]}/>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                            Fotogrametría con Dron
                            </Accordion.Title>
                            <Accordion.Content>
                                <Gallery imagenes={imagenes[6]}/>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                            Modelación con software especializado (vissim)
                            </Accordion.Title>
                            <Accordion.Content>
                                <Gallery imagenes={imagenes[7]}/>
                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>
                </Flowbite>
                <WhatsappLink />
            </div>
        </Layout>
    )
}