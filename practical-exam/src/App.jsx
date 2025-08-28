import { Route, Routes } from 'react-router'
import './App.css'
import MovieHeader from './Components/Header'
import AddMovie from './Components/AddMovie'
import EditMovie from './Components/EditMovie'
import MovieHome from './Components/Home'
import Login from './Components/Auth/Login'
import Register from './Components/Auth/Register'

function App() {

  return (
    <>
      <MovieHeader />
      <Routes>
        <Route path="/" element={<MovieHome />} />
        <Route path="/add-product" element={<AddMovie />} />
        <Route path="/edit-product/:id" element={<EditMovie />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
