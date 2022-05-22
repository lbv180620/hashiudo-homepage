import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Hashiudo's homepage" />
        <meta name="author" content="Hashiudo Koboreguchi" />
        <meta name="author" content="lbv180620" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Hashiudo Koboreguchi" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@lbv180620" />
        <meta name="twitter:creator" content="@lbv180620" />
        <meta property="og:site_name" content="Hashiudo Koboreguchi" />
        <meta name="og:title" content="Hashiudo Koboreguchi" />
        <meta property="og:type" content="website" />
        <title>河堀口はしうど - ホームページ</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
