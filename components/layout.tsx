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
        {/* <div className="min-h-full flex flex-col"> */}
        <MainHeader />
        <main className='content-start'>{children}</main>
        {/* </div> */}
        <Footer />
      </div>
    </>
    
  )
}

export default Layout
