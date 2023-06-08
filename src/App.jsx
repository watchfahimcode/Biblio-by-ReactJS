import './App.css'
import Navbar from './navbar.jsx'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import Logout from './pages/logout'
import BookEntry from './pages/book-entry'
import BookList from './pages/book-list'
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
      <Navbar /> 
      <div clasName="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/book-entry" element={<BookEntry />} />
          <Route path="/book-list" element={<BookList />} />
          <Route path="/logout" element={<Logout />} />

        </Routes>
      </div>  

    </>
  )
   

}

export default App
