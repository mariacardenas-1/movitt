import BlueBar from "./blueBar"
import ValueSection from "./valueSection"
import responsability from '../public/assets/responsabilityIcon.png'
import transparency from '../public/assets/transparencyIcon.png'
import ethics from '../public/assets/ethicsIcon.png'
import excellence from '../public/assets/excellenceIcon.png'
import CloseBlueBar from "./closeBlueBar"

export default function TableValue () {
    return (
        <div className="mx-4 desk:mx-40 md:mx-28 bg-neutral-100">
            <BlueBar text={'Valores Corporativos'} />
            <ValueSection 
              icon={responsability} 
              tittle={'Responsabilidad'} 
              description={'Respaldados  por  nuestros funcionarios tenemos  la capacidad  de  tomar  decisiones  y  cumplir  con  los  compromisos  asumidos con nuestros clientes.'}
            />
            <ValueSection 
              icon={transparency} 
              tittle={'Transparencia'} 
              description={'Tenemos claridad en todos los aspectos de nuestra gestión, desde la toma de decisiones hasta la ejecución de estas.'}
            />
            <ValueSection 
              icon={ethics} 
              tittle={'Ética'} 
              description={'Somos directos, concisos y coherentes en la comunicación, en los servicios que prestamos y en la relación que desarrollamos con nuestros clientes.'}
            />
            <ValueSection 
                icon={excellence} 
                tittle={'Excelencia'} 
                description={'Buscamos desarrollar todos nuestros procesos,  con  los  más  altos  estándares  de  calidad  dentro  de  un adecuado ambiente de trabajo.'}
            />
            <CloseBlueBar />
        </div>
    )
}