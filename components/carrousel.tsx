import Image from "next/image"
import { Carousel } from "flowbite-react"
import fluvial from '../public/assets/slider-home/Fluvial.jpg'
import urbano from '../public/assets/slider-home/Urbano.jpg'
import vias from '../public/assets/slider-home/vias.jpg'
import infraestructura from '../public/assets/slider-home/infraestructura.jpg'
import transito from '../public/assets/slider-home/transito.jpg'
import transporte from '../public/assets/slider-home/transporte.jpg'

export default function Carrousel () {
    const imagenes = [fluvial, urbano, vias, infraestructura, transito, transporte]
    return (
        <div className=" desk:mb-24 xl:mb-40 xl:h-80 h-48 2xl:h-96">
            <Carousel className="xl:h-deskSlider md:h-96 h-48 p-0 bg-neutral-500">
                {imagenes.map(photo =>(
                    <Image className='xl:h-deskSlider md:h-96 h-48' src={photo} alt='...' />
                ))}
            </Carousel>
        </div>
    )
}