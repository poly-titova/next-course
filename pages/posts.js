import { MainLayout } from '../components/MainLayout'
import Link from 'next/link'

export default function Posts({ posts }) {
  return (
    <MainLayout title={'Posts Page'}>
      <h1>Posts Page</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`} as={`/post/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  )
}

Posts.getInitialProps = async () => {
  const response = await fetch('http://localhost:4200/posts')
  const posts = await response.json()

  return {
    posts
  }
}
