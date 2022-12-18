import React from 'react'
import { Link } from "react-router-dom";
import Searcher from './Searcher';

function Nav() {

  const exit=()=>{
    localStorage.removeItem('token');
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container-fluid">
        <a href="#g" className="navbar-brand">ExtraFilms</a>
          
           <div  className="d-flex">
              <Searcher></Searcher>
          </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#contenido">
          <span className="navbar-toggler-icon"></span>
        </button>
        

        <div className="collapse navbar-collapse " id="contenido">
          <ul className="N nav navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav link">
              <Link to='/Movies' className="nav-link active">Peliculas</Link>
            </li>
            <li className="nav link">
              <Link to='/Movies/Favorites' className="nav-link">Favoritos</Link>
            </li>
            <li className="nav link">
             <Link to='/' className="nav-link text-danger ms-2" onClick={()=>exit()}>
              Salir
            </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav