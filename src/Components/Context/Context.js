import React,{ createContext, useState} from 'react'

export const All = createContext();


function Context(props) {

  
    const [Fvs, setFvs] = useState(JSON.parse(localStorage.getItem('favs')))

    

    if(Fvs===null){
      setFvs([])
    }
 

    const addOrRemoveFavorites= (e)=>{
          let btn =e.target   
          let parent = btn.parentElement; 
          let img = parent.querySelector('img').src
          const title = parent.querySelector('h5').innerText
          const overview = parent.querySelector('p').innerText

          const movieData={
            img, title, overview,
            id: btn.dataset.movieId
          }
          let dataFull = Fvs;

          let IN = dataFull.find(x => x.id === movieData.id) 

          if(IN){ 
            dataFull = dataFull.filter(x => x.id !== movieData.id)
          }else{
            dataFull.push(movieData)
          }
          
          localStorage.setItem('favs', JSON.stringify(dataFull))
          setFvs(dataFull)     
    }

  return (
    <All.Provider value={{addOrRemoveFavorites, Fvs}}>
        {props.children}
    </All.Provider>
  )
}

export default Context