import Head from 'next/head'

const posts = [
  {
    title: 'Learning React',
    excerpt: 'Learn react testing'
  },
  {
    title: 'Learning React with tailwind',
    excerpt: 'Learn react testing with tailwindCSS'

  },
];
export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Bloggers Pro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        {
          posts.map((post, index) => (
            <div>
              {post.title}
              {post.excerpt}
            </div>
          )
          )}
      </div>
    </div>
  )
}
