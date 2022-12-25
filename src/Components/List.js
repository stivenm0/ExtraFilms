import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import {All} from './Context/Context'

function List({x}) {

   const {addOrRemoveFavorites, Fvs}= useContext(All);

   const value =(e, booll)=>{
    if(!booll){
    if(e.target.innerText === ""){
    e.target.innerText ="💘"
   }else{
    e.target.innerText =""
   }}
  }

  return (
    <div className="card m-1 bg-primary bg-opacity-50" >
     
        <img src={x.poster_path?`https://image.tmdb.org/t/p/w500/${x.poster_path}`: x.img? x.img: 'https://cliply.co/wp-content/uploads/2020/03/422003450_404_UFO_400px.gif' }  className="img-fluid imgg" alt="..."/>
      <button type="button" className="favorite-btn"
       onClick={(e)=>{
        value(e, !x.poster_path)
        addOrRemoveFavorites(e)
        
       
      }} data-movie-id={x.id}
       >
        {x.img? "💘": x.poster_path && (Fvs.some((y)=> y.id == x.id))? "💘":null}
      </button>
      <div className="card-body">
        <h5 className="card-title">{x.original_title}</h5>
        <p className="card-text">{x.overview.substr(1,100)}...</p>
        <Link to={`/Details?movieID=${x.id}`} className='btn btn-dark' >Detalles</Link>
      </div>
    </div>

    
  )
}

export default List