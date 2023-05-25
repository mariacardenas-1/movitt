import Image from "next/image"
import React from 'react'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


export default function Gallery ({imagenes}) {
    const [open, setOpen] = React.useState(false);
    const [index, setIndex] = React.useState(-1);
    return (
        <div onClick={() => setOpen(true)} className="flex flex-wrap justify-center max-w-3xl gap-5 mx-auto">
           {imagenes.map((img, i) => (
            <div className="lg:w-60 hover:cursor-pointer desk:w-80 w-80">
                <Image onClick={() => setIndex(i)} className='rounded min-h-47 max-h-47 object-cover ' src={img} alt='...'/> 
            </div>
           ))}
           <Lightbox
                open={open}
                index={index}
                close={() => (setOpen(false))}
                slides={imagenes}
            />
        </div>
    )
}