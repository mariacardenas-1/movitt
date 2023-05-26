import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import BarraContacto from '../components/barra-contacto'
import Carrousel from '../components/carrousel'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../interfaces/post'
import TextSection from '../components/textSection'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  const NosotrosText = 'Somos una empresa dedicada a la aplicación de la ciencia, técnica y en general el ingenio, en beneficio de la sociedad. Como rama especifica <b> MOVITT </b> desempeña sus labores en procesos de consultoría de modos de transporte y su infraestructura, entendidos como el conjunto de elementos que interactúan entre sí y con el entorno, para permitir un movimiento eficiente y seguro de personas y bienes. Nuestro sello de innovación corresponde a la gestión ante las entidades encargadas y responsables del ordenamiento del territorio y a la utilización de sistemas de información geográfica SIG para que nuestros clientes realicen consultas interactivas de datos espaciales que permitan tomar las mejores decisiones.'
  return (
    <>
      <Layout>
        <Head>
          <title>Movitt - Transporte y vias</title>
        </Head>
        <Carrousel />
        <BarraContacto />
        <TextSection
          tittle={'Nosotros'}
          text={NosotrosText} />
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
