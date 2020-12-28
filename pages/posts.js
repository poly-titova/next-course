import Head from 'next/head'
import { MainLayout } from '../components/MainLayout'

export default function Posts() {
  return (
    <MainLayout>
      <Head>
        <title>Posts Page | Next Course</title>
        <meta name="keywords" content="next,javascript,nextjs,react" />
        <meta name="description" content="this is youtube tutorial for next" />
        <meta charset="utf-8" />
      </Head>
      <h1>Posts Page</h1>
    </MainLayout>
  )
}