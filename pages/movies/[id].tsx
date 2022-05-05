import { useRouter } from 'next/router'

const MovieDetail = () => {
  const router = useRouter()
  console.log(router)
  return <h4>{router.query.title || 'Loading...'}</h4>
}

export default MovieDetail
