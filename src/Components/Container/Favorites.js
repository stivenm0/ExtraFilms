import React, { useContext, useEffect } from 'react'
import { All } from '../Context/Context'
import List from '../List'

function Favorites() {

    const {Fvs} = useContext(All)

    useEffect(() => {
      document.title = 'Favoritos';
    }, [])
    

  return (
    <>
    <h1 className='h1 font-monospace text-center bg-primary' >Favoritos</h1>
    <main className='d-flex flex-wrap justify-content-center'>
      
      {Fvs.length!==0?Fvs.map((x, idx)=>(
        <List key={idx} x={x}/>
      )): <h1>No hay Favoritos</h1>

      }
    </main>
    </>
  )
}

export default Favorites