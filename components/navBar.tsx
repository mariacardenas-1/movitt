import Link from 'next/link'
import { useState } from "react"
import logo from '../public/assets/cropped-movit-logo-1-1.png'
import hamburger from '../public/assets/menu.png'
import closeIcon from '../public/assets/closeIcon.png'
import Image from "next/image"

const NavBar = () => {
    const [navbar, setNavbar] = useState(false)
    const menuItems = [
        {
            slug: 'servicios',
            name: 'Servicios'
        },
        {
            slug: 'experiencia',
            name: 'Experiencia'
        },
        {
            slug: 'nuestro-equipo',
            name: 'Nuestro Equipo'
        },
        {
            slug: 'opinion',
            name: 'Opinión'
        },
        {
            slug: 'contactenos',
            name: 'Contáctenos'
        },
    ]
    
    return (
        <div>
           <nav className='w-full bg-gris top-0 left-0 right-0 z-10'>
                <div className="justify-between px-4 mx-auto lg:max-w-7x1 lg:items-center lg:flex">
                    <div>
                        <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
                            <Link href='/'>
                                <Image src={logo} alt="logo" className="w-44"/>
                            </Link>
                            <div className="lg:hidden">
                                <button
                                  className="p-2 text-gray-700 rounded-md outline-none"
                                  onClick={() =>setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <Image src={closeIcon} width={18} height={18} alt="logo" />
                                        ): (
                                        <Image
                                            src={hamburger}
                                            width={20}
                                            height={20}
                                            alt="logo"
                                            className="focus:border-none active:border-none" 
                                        />
                                        )
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                          className={`bg-movittBlue relative h-mobileMenu md:h-3/6 lg:bg-gris flex-1 justify-self-center pb-20 mt-8 lg:block lg:pb-0 lg:mt-0 ${
                            navbar ? 'p-12 lg:p-0 block' : 'hidden'
                          }`}
                        >
                            <ul className=" lg:h-auto items-center justify-center lg:flex">
                                {menuItems.map(item => (
                                    <li key={item.slug} className="  text-xl lg:text-movittBlue text-slate-200 py-6 lg:px-6 text-center border-b-2 lg:border-b-0 hover:border-b-cblue  hover:text-white lg:hover:text-yellow-600">
                                        <Link href={`/${item.slug}`} onClick={() => setNavbar(!navbar)}>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
           </nav>
        </div>
    )
}

export default NavBar