import Link from "next/link"

export default function LinkSection ({text='', src='/', linkText=''}) {
    return (
        <div className="flex py-3">
            <p className="font-semibold text-yellow-300 pr-2">
                {text}
            </p>
            <Link className='hover:font-bold' target="_blank" href={src} >
                {linkText}
            </Link>
        </div>
    )
}