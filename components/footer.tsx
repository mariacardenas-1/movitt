import linkedIn from '../public/assets/linkedinIcon.png' 
import instagramIcon from '../public/assets/instagramIcon.png'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <footer className="bg-zinc-900 h-24 text-white px-5 md:px-40 items-center lg:py-8 py-14 justify-center md:justify-between flex flex-col md:flex-row ">
      <div className='flex gap-3'>
        <Link target='_blank' href='https://www.linkedin.com/in/movitt-sas-81137a171/' >
          <Image src={linkedIn} alt='linkedIn' className='w-7 pb-3 md:pb-0 ' />
        </Link>
        <Link target='_blank' href='https://www.instagram.com/movitt_/' >
          <Image src={instagramIcon} alt='instagram' className='w-7 pb-3 md:pb-0 ' />
        </Link>
      </div>
      <div className='text-neutral-500'>
      Movitt {date} -
      Desarrollado por:&nbsp;
        <Link target='_blank' href='https://www.linkedin.com/in/maria-fernanda-c%C3%A1rdenas-1-frontend/' className='text-neutral-300 hover:text-neutral-50'>
          Mafe Cárdenas
        </Link>
      </div>
    </footer>
  )
}

export default Footer
