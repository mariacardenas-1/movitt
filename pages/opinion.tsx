import Container from '../components/container'
import MoreStories from '../components/more-stories'
// import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../interfaces/post'
import WhatsappLink from '../components/whatsappLink'
import { HOME_OG_IMAGE_URL } from '../lib/constants'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
//   const heroPost = allPosts[0]
  const morePosts = allPosts.slice(0)// set in 1 if you are using hero post

  return (
    <>
      <Layout>
        <Head>
          <title>{`Movitt SAS | Blog de Opinión`}</title>
          <meta property="og:image" content={HOME_OG_IMAGE_URL} />
        </Head>
        <Container>
          <Intro />
          {/* {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )} */}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
        <WhatsappLink />
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