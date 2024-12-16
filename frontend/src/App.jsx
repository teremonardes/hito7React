import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import Login from './pages/Login/Login'
import Cart from './pages/Cart/Cart'
import Register from './pages/Register/Register'
import NotFound from './pages/NotFound/NotFound'
import Pizza from './pages/Pizza/Pizza'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar/Navbar'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import FetchPizzas from './context/FetchContext'
import CartProvider from './context/CartContext'
import { UserContext } from './context/UserContext'
import { useContext } from 'react'

function App () {
  const { token } = useContext(UserContext)
  return (
    <BrowserRouter>

      <FetchPizzas>
        <CartProvider>
          <Navbar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={token ? <Profile /> : <Navigate to='/login' />} />
            <Route path='/login' element={!token ? <Login /> : <Navigate to='/' />} />
            <Route path='/register' element={!token ? <Register /> : <Navigate to='/' />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/pizza/:id' element={<Pizza />} />
            <Route path='*' element={<NotFound />} />

          </Routes>

          <Footer />

        </CartProvider>
      </FetchPizzas>

    </BrowserRouter>

  )
}

export default App
