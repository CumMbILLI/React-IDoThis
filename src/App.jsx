import {  BrowserRouter,Routes, Route, Link } from 'react-router-dom';

import {FormSignIn} from './components/FormSignIn/FormSignIn'
import {FormSignUp} from './components/FormSignUp/FormSignUp'

import './App.css';


function App() {

  return (
       <div className="App">
          <Routes>
            <Route path='/sign-in' element={<FormSignIn/>}/>  
            <Route path='/sign-up' element={<FormSignUp/>}/>  
          </Routes>  
        </div>
  );
}

export default App;