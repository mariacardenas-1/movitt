import Image from "next/image"

export default function ValueSection ({icon, tittle, description}) {
    return (
        <div className="flex desk:px-8 p-2 pb-6  border-b-2 border-neutral-200 desk:h-24">
            <Image src={icon} alt="icon" className="w-12 h-12"/>
            <div className="pl-4 desk:pl-6">
                <div className="font-semibold text-lg">{tittle}</div>
                <p className="font-light text-base">{description}</p>
            </div>
        </div>
    )
}