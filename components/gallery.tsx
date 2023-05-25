import Image from "next/image"
export default function Gallery ({imagenes}) {
    return (
        <div className="flex flex-wrap justify-center max-w-3xl gap-5 mx-auto">
           {imagenes.map(img => (
            <div className="lg:w-60  desk:w-80 w-80">
                <Image className='rounded' src={img} alt='...'/> 
            </div>
           ))}
        </div>
    )
}