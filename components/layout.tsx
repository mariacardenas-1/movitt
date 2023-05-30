import Footer from './footer'
import Meta from './meta'
import MainHeader from './mainHeader'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className='shadow-layout flex flex-col max-w-screen-2xl mx-auto min-h-screen justify-between'>
        <MainHeader />
        <main className='flex-1 content-start'>{children}</main>
        <Footer />
      </div>
    </>
    
  )
}

export default Layout
