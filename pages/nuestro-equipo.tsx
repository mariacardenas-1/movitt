import Layout from "../components/layout"
import TextSection from "../components/textSection"
import TableValue from "../components/tableValues"

export default function NuestroEquipo () {
    return (
        <Layout>
            <TextSection 
              tittle={'Nuestro Equipo'} 
              text={'La capacidad de nuestra compañía permite ofrecer servicios integrales en estudios, diseños e interventoría de proyectos de transporte, tránsito e infraestructura, conformado por personal especializado, con experiencia y disposición de ofrecer las mejores alternativas en el campo de evaluación y análisis para el desarrollo de proyectos urbanos y regionales de carácter público o privado.'} />
            <div className="pb-10">
                <TableValue />
            </div>
        </Layout>
    )
}