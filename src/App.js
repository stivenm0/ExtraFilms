import E404 from './Components/Pages/E404'
import Movies from './Components/Container/Movies'
import Layout from './Components/Pages/Layout'
import {Routes, Route} from 'react-router-dom'
import Details from './Components/Container/Details';
import Results from './Components/Container/Results'
import Favorites from './Components/Container/Favorites'


function App() {
  


  return (
    <Routes>
      <Route path='/' element={<Layout/>} >
        <Route path='/' element={<Movies/>} ></Route>
        <Route path='/Details' element={<Details/>} ></Route>
        <Route path='/Results' element={<Results/>} ></Route>
        <Route path='/Favorites' element={<Favorites/>} ></Route>
      </Route>

      <Route path="*" element={<E404></E404>}></Route>
    </Routes>
 
    
      

  );
}

export default App;
