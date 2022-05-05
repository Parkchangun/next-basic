import Head from 'next/head'

interface Props {
  title: string
}

const SEO = ({ title }: Props) => {
  return (
    <Head>
      <title>{title} | My App</title>
    </Head>
  )
}

export default SEO
