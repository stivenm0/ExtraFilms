import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import Context from './Components/Context/Context'


// const root =
 ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
    <Context>
    <App />
</Context>
 </BrowserRouter>
 );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


