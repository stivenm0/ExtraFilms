import React, { useEffect, useState,} from 'react'
import axios from 'axios'
import List from '../List';

function Movies() {

  const [moviesList, setMoviesList] = useState([])
  
  useEffect(() => {
   document.title = 'Películas';
    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=f48300a2e7c1b0c229709942048f82ee&language=es&page=1'
    
    axios.get(url)
    .then(res=> {setMoviesList(res.data.results)})

  }, [])
  

  return (
    <main className='d-flex flex-wrap justify-content-center'>
      {moviesList.map((x, idx)=>(
        <List key={idx} x={x}/>
      ))

      }
    </main>
  )
}

export default Movies