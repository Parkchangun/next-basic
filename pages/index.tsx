import type { NextPage } from 'next'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { SEO } from 'src/components'

const API_KEY = '10923b261ba94d897ac6b81148314a3f'

const Home: NextPage = () => {
  // (async () => {
  //   const response = await (await fetch(`fdfdfdfadf`)).json()
  // })()

  const [movies, setMovies] = useState([])

  useEffect(() => {
    ;(async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json()

      setMovies(results)
    })()
  }, [])

  return (
    <>
      <SEO title='Home' />
      <h1>Hello</h1>
      {/* <Image src='/vercel.svg' alt='vercel' layout='fill' /> */}
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie: any) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </>
  )
}

export default Home
