import Layout from "../components/layout"
import TextSection from "../components/textSection"
import BlueBar from "../components/blueBar"

export default function Contactenos () {
    return (
        <Layout>
        <TextSection tittle={'Contáctenos'} text={''}/>
        <div className="bg-movittBlue mx-40 flex">
            <div className="text-white">
            Póngase en contacto con nosotros a través de los siguientes medios:
            Celular + 57 300 319 7386
            movittingenieria@gmail.com
            *  Carrera 16B No 164 – 46 oficina 207
            Bogotá – Colombia
            *  KM 5.5 vía Tunja – Paipa
            O si prefiere déjenos su mensaje, llenando los datos del siguiente formulario  y le responderemos a la mayor brevedad posible.
            </div>
            <form>
                
            </form>
        </div>
        </Layout>
    )
}