import Link from "next/link";

export default function BarraContacto () {
    return (
        <div className=" justify-center md:mt-48 desk:mt-40 2xl:mt-24 px-5 gap-2.5 desk:px-80 lg:px-40 flex flex-col lg:flex-row items-center lg:justify-between bg-movittBlue text-white max-w-full h-28 font-semibold text-base lg:text-xl">
            Un equipo profesional a su servicio
            <Link href='tel:%20+573003197386%20'>
                <button className="p-2 font-saemibold hover:font-bold text-sm lg:text-lg rounded-lg border-2 border-gray-200 text-gray-200 hover:text-movittBlue hover:bg-white hover:border-white">
                    Llamar ahora
                </button>
            </Link>
            
        </div>
    )
}