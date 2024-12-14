import React from 'react'
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import Header from './components/UI/Header'
import Home from './components/UI/Home'
import Signup from './components/customForm/Signup'
import Login from './components/customForm/Login'
import Error from './components/UI/Error'
import Testing from './components/customForm/Testing'


const Routing = () => {
  return (
    <BrowserRouter>
    <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/testing' element={<Testing/>} />
            <Route path='*' element={<Error/>} />
        </Routes>
    </BrowserRouter>

  )
}

export default Routing