import Link from 'next/link'
import { useRouter } from 'next/router'
import { GetServerSideProps, NextPage } from 'next/types'
import { SEO } from 'src/components'

export const getServerSideProps: GetServerSideProps = async () => {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json()

  const test = [1, 2, 3]

  return {
    props: {
      results,
      test,
    },
  }
}

interface SSRProps {
  results: any
  test: number[]
}

const Home: NextPage<SSRProps> = ({ results, test }) => {
  // (async () => {
  //   const response = await (await fetch(`fdfdfdfadf`)).json()
  // })()
  const router = useRouter()
  const onClick = (id: number, title: string) => {
    router.push({
      pathname: `/movies/${title}/${id}`,
    })
  }

  return (
    <div className='container'>
      <SEO title='Home' />
      {results.map((movie: any) => (
        <div
          className='movie'
          key={movie.id}
          onClick={() => onClick(movie.id, movie.original_title)}
        >
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>
            <Link href={`/movies/${movie.original_title}/${movie.id}`}>
              <a>{movie.original_title}</a>
            </Link>
          </h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover {
          cursor: pointer;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  )
}

export default Home
