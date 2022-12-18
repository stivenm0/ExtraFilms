import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import FormLogin from '../FormLogin';

function Login() {
  
  const N = useNavigate();
  
  useEffect(() => {
    if(localStorage.getItem('token')!== null){
      getIn()
    }
    document.title = 'Iniciar Sesión';
  }, [])
  
  
    const getIn = ()=>{ N('/Movies') }


  return (
    <main className='m ' >
      <div>
      <h1 className='text-white display-1 font-monospace'>ExtraFilms</h1>
      </div>
     <FormLogin getIn={getIn}></FormLogin>
    </main>
  )
}

export default Login