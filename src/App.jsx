import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Images } from './components/Images'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { NavBar } from './components/NavBar'
import { Products } from './components/Products'
import { Product } from './components/Product'
import { Question } from './components/Question'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { Login } from './components/Login'

const queryClient = new QueryClient

function App() {
const [isLoggedIn, setIsLoggedIn]=useState(false)
const [loggedUser, setLoggedUser]=useState('')

  return (
      <BrowserRouter>
      <QueryClientProvider client={queryClient}>
       <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} loggedUser={loggedUser}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='images' element={<Images />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:id' element={<Product />} />
          <Route path='contact' element={<Contact />} />
          <Route path='questions' element={isLoggedIn? <Question /> : <Login setIsLoggedIn={setIsLoggedIn} setLoggedUser={setLoggedUser}/>} />
          <Route path='login' element={<Login setIsLoggedIn={setIsLoggedIn} setLoggedUser={setLoggedUser}/>} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
