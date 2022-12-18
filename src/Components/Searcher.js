import React from 'react'
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

function Searcher() {

  const N = useNavigate();

  const search=(e)=>{
    e.preventDefault();
    let keyword = e.target.clave.value.trim()

    if(keyword.length<2){
      swal("escriba una palabra clave" ,'', 'error' )
    }else{
        N(`Results?keyword=${keyword}`)
    }

  }

  return (
    <form className='d-flex input-group' onSubmit={(e)=>search(e)}>
        <input type="text" name='clave' className="form-control form-control-sm" placeholder="Palabra Clave"/>
        <button className="input-group-text" id="entrada1" type='submit'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </button>
    </form>
  )
}

export default Searcher