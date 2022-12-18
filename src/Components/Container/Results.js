import React, { useEffect, useState } from 'react'
import axios from 'axios'
import List from '../List'

function Results() {
const [Movies, setMovies] = useState([])
   let query = new URLSearchParams(window.location.search)
   let keyword = query.get('keyword')

    
   useEffect(() => {
    let url = `https://api.themoviedb.org/3/search/movie?api_key=f48300a2e7c1b0c229709942048f82ee&language=es&page=1&query=${keyword}`
    axios.get(url)
    .then(res =>{ setMovies(res.data.results)})
    .catch(res=> console.log(res))
    document.title = keyword;

   }, [keyword])
   

  return (<>
    <h1 className='h1 font-monospace text-center bg-primary' >Resultados de: {keyword}</h1>
    {Movies.length===0 && <p>sin resultados</p>}
    {Movies &&

    <main className='d-flex flex-wrap justify-content-center'>
      {Movies.map((x, idx)=>(
        <List key={idx} x={x}/>
      ))
        
      }
    </main>
    }
    </>
  )
}

export default Results