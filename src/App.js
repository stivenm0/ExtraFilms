import Login from './Components/Pages/Login'
import E404 from './Components/Pages/E404'
import Movies from './Components/Container/Movies'
import Layout from './Components/Pages/Layout'
import {Routes, Route, useNavigate, Navigate} from 'react-router-dom'
import Details from './Components/Container/Details';
import Results from './Components/Container/Results'
import Favorites from './Components/Container/Favorites'


function App() {

  const N = useNavigate();


  const Tok= (y)=>{
    if(localStorage.getItem('token')!== null){
      return y;
    }else{
      return <Navigate to='/'></Navigate>
    }
  }

  


  return (
    <Routes>
      <Route path='/' element={<Login/>} ></Route>
      <Route path='/Movies' element={Tok(<Layout/>)} >
        <Route path='/Movies' element={Tok(<Movies/>)} ></Route>
        <Route path='/Movies/Details' element={Tok(<Details/>)} ></Route>
        <Route path='/Movies/Results' element={Tok(<Results/>)} ></Route>
        <Route path='/Movies/Favorites' element={Tok(<Favorites/>)} ></Route>
      </Route>

      <Route path="*" element={<E404></E404>}></Route>
    </Routes>
 
    
      

  );
}

export default App;
