import { Route, Routes } from 'react-router'
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import AddProduct from './Components/AddProduct'
import EditProduct from './Components/EditProduct'
import Login from './Components/Login'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
