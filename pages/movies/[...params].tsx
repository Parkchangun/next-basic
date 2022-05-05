import SEO from '@components/SEO'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { useEffect, useState } from 'react'

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const params = context.params.params
  console.log('파람스', params)
  return {
    props: {
      params,
    },
  }
}

interface Props {
  params: InferGetServerSidePropsType<typeof getServerSideProps>
}

const MovieDetail = ({ params }: Props) => {
  const [title, id] = params as string[]
  const [data, setData] = useState()

  useEffect(() => {
    ;(async () => {
      const response = await (await fetch(`/api/movies/${id}`)).json()
      setData(response)
    })()
  }, [])
  console.log(data)
  return (
    <>
      <SEO title={title} />
      <h4>{title || 'Loading...'}</h4>
    </>
  )
}

export default MovieDetail
