import Layout from "../components/layout"
import { CustomFlowbiteTheme, Flowbite, Tabs } from 'flowbite-react'
import prueba from '../public/assets/pruebaIcon.svg'
import { MdDashboard } from 'react-icons/md';
import BusIcon from "../icons/busIcon";
import transporte1 from '../public/assets/slider-home/transporte1.jpg'
import transito1 from '../public/assets/slider-home/transito1.jpg'
import infraestructura1 from '../public/assets/slider-home/infraestructura1.jpg'
import TransitoIcon from "../icons/transitoIcon";
import InfraestructuraIcon from "../icons/infraestructuraIcon";
import Image from "next/image";
import { theme } from '../components/customTheme'
import TextSection from "../components/textSection";

export default function Servicios () {
  
    return (
        <Layout>
            <TextSection tittle={'Servicios'} text={''} />
            <div className="w-72 md:w-full mx-auto md:px-24">
                <div className=" desk:px-40 lg:px-28 md:px-16 px-10">
                    <Flowbite  theme={{ theme }}>
                        <Tabs.Group
                            aria-label="Tabs with icons"
                            style="underline"
                        >
                            <Tabs.Item
                                active={true}
                                title="Transporte"
                                icon={BusIcon}
                            >
                                <p className="text-justify pb-10 ">
                                    El transporte es una de las actividades cotidianas imprescindibles para la sociedad por tanto para Movitt constituye un eje fundamental de trabajo interdisciplinario desde la psicología, para entender el comportamiento humano, hasta la ingeniería con sus métodos analíticos, pasando por la geografía, la economía y el urbanismo. Esta variedad de enfoques junto con la relevancia en términos de calidad de vida, justifican el interés de Movitt por asumir el desafío intelectual y laboral de esta disciplina.

                                </p>
                                <Image src={transporte1} alt="trasnporte" className="h-28 rounded lg:h-80 " />
                                <div className="p-8">
                                    <ul className="">
                                        <li className='list-disc'>Estudios de pre-factibilidad y factibilidad de infraestructura de transporte.</li>
                                        <li className='list-disc'>Estructuración técnica, legal y financiera de proyectos de transporte urbano y rural.</li>
                                        <li className='list-disc'>Estudios de oferta  y demanda.</li>
                                        <li className='list-disc'>Modelización de sistemas de transporte (macro-simulación).</li>
                                        <li className='list-disc'>Formulación de planes maestros de movilidad.</li>
                                    </ul>
                                </div>
                            </Tabs.Item>
                            <Tabs.Item
                                title="Tránsito"
                                icon={TransitoIcon}
                            >
                                <p className="text-justify pb-10 ">
                                    Como disciplina derivada de la ingeniería de transporte, Movitt brinda asesoría y consultoría en tránsito, seguridad vial y movilidad sostenible, solucionando los impactos generados, teniendo como premisa garantizar las mejores condiciones de operación.
                                    
                                </p>
                                <Image src={transito1} alt="tránsito" className="h-28 rounded lg:h-80" />
                                <div className="p-8">
                                    <ul className="">
                                        <li className='list-disc'>Estudios de tránsito para todo tipo de equipamientos urbanos.</li>
                                        <li className='list-disc'> Elaboración de planes de manejo de tránsito.</li>
                                        <li className='list-disc'>Diseño de señalización vial.</li>
                                        <li className='list-disc'>Diseño de semaforización.</li>
                                        <li className='list-disc'>Formulación de planes estratégicos de seguridad vial.</li>
                                        <li className='list-disc'>Auditorias de seguridad vial.</li>
                                        <li className='list-disc'> Estudios y diseños de medidas de trafico calmado.</li>
                                        <li className='list-disc'>Formulación de estrategias para transporte no motorizado.</li>
                                        <li className='list-disc'>Modelización de Tránsito (Micro-simulación).</li>
                                    </ul>
                                </div>
                            </Tabs.Item>
                            <Tabs.Item
                                title="Infraestructura"
                                icon={InfraestructuraIcon}
                            >
                                <p className="text-justify pb-10 ">
                                    El desarrollo territorial y económico de nuestro país va de la mano con la construcción y mantenimiento de infraestructura, por tanto Movitt centra su desempeño en la prestación de servicios de consultoría, diseños, gerencia de proyectos e interventoría de obras de infraestructura tanto vial como férrea.
                                </p>
                                <Image src={infraestructura1} alt="infraestructura" className="h-28 rounded lg:h-80"  
                                />
                                <div className="p-8">
                                    <ul className="">
                                        <li className='list-disc'> Diseño geométrico.</li>
                                        <li className='list-disc'>Diseño de Pavimentos.</li>
                                        <li className='list-disc'>Sistema de gestión de pavimentos urbanos.</li>
                                        <li className='list-disc'>Estudios de Geotecnia.</li>
                                        <li className='list-disc'>Suministro e instalación de señales verticales.</li>
                                        <li className='list-disc'>Demarcación vial.</li>
                                        <li className='list-disc'>Suministro e instalación de semáforos</li>
                                        
                                    </ul>
                                </div>
                            </Tabs.Item>
                        </Tabs.Group>
                    </Flowbite>
                </div>
            </div>
        </Layout>
    )
}