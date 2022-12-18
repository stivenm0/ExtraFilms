import React,{useEffect, useState} from 'react'
import axios from 'axios'

function Details() {

  const [movie, setMovie] = useState(null)

   let query = new URLSearchParams(window.location.search)
   
   let id = query.get('movieID')

   useEffect(() => {
      let url = `https://api.themoviedb.org/3/movie/${id}?api_key=f48300a2e7c1b0c229709942048f82ee&language=es-ES`
      axios.get(url)
      .then(res =>{ setMovie(res.data)

        document.title = "Detalles";

      })
   }, [])
   
  const back= ()=>{
    window.history.back();
   }

  return (
    <>
    {!movie && <p>cargando</p>}
    {movie && 
    <main className=' p-2 '>
      <button type="button" className="close position-absolute rounded-pill px-3" onClick={back}  >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <section className='d-flex mt-5 flex-wrap flex-md-nowrap'>
        <img 
        src={movie.poster_path?`https://image.tmdb.org/t/p/w500/${movie.poster_path}`: 'https://cliply.co/wp-content/uploads/2020/03/422003450_404_UFO_400px.gif'}  
        className="img-fluid imgg m-auto" alt="..."/>
      <article className='p-2 pt-0'>
      <h1>{movie.original_title}</h1>
      <h5>Fecha: <small className=' lead ' >{movie.release_date}</small></h5>
      <h5>rating: {Math.round(movie.vote_average)}</h5>
      <p className=' pe-5 pp'>
        {movie.overview}
      </p>
      <h5>Géneros:</h5>
      <ul>
        {movie.genres.map((x, idx)=>(
          <li key={idx} >{x.name}</li>
        ))

        }
      </ul>
      </article>
      </section>
      
    </main>
   
  }
   </>
  )
}

export default Details