import Layout from "../components/layout"
import {  Flowbite, Accordion } from "flowbite-react"
import TextSection from "../components/textSection"
import { theme } from '../components/customTheme'
import Gallery from "../components/gallery"
import transito from '../public/assets/slider-home/Fluvial.jpg'
import transporte from '../public/assets/slider-home/transporte.jpg'
import otra from '../public/assets/slider-home/Urbano.jpg'


export default function Experiencia () {
    const imaGenes = [transito, transporte, otra, transito, transporte, otra]
    return (
        <Layout>
            <TextSection tittle={'Experiencia'} text={' '} />
            <div className=" desk:px-36 lg:px-24 md:px-14 px-19 mx-12 pb-7 mb-10 bg-neutral-50 rounded-lg md:mx-36">
            <Flowbite  theme={{ theme }}>
                <Accordion flush={true}>
                    <Accordion.Panel>
                        <Accordion.Title>
                            Diseño e implementación de señalización vial
                        </Accordion.Title>
                        <Accordion.Content>
                            <Gallery imagenes={imaGenes}/>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>
                            Campañas de seguridad vial
                        </Accordion.Title>
                        <Accordion.Content>
                            <Gallery imagenes={imaGenes}/>  
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>
                            Estudios de tránsito
                        </Accordion.Title>
                        <Accordion.Content>
                            <Gallery imagenes={imaGenes}/>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>
                            Planes de Manejo de Tránsito - PMT
                        </Accordion.Title>
                        <Accordion.Content>                        
                            <Gallery imagenes={imaGenes}/>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>
                            Diseño geométrico y de pavimentos
                        </Accordion.Title>
                        <Accordion.Content>                        
                            <Gallery imagenes={imaGenes}/>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>
                        Fotogrametría con Dron
                        </Accordion.Title>
                        <Accordion.Content>
                            <Gallery imagenes={imaGenes}/>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>
                        Modelación con software especializado
                        </Accordion.Title>
                        <Accordion.Content>
                            <Gallery imagenes={imaGenes}/>
                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion>
            </Flowbite>
                
            </div>
           
        </Layout>
    )
}