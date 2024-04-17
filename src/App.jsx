import {useState, useEffect} from 'react'
import HomePage from '../pages/HomePage'
import ProductoDetalle from '../pages/ProductoDetalle'
import NewProduct from '../pages/NewProduct'
import {Routes, Route, Link, useNavigate, Navigate} from 'react-router-dom'
import * as authService from '../services/auth.services.js'
import Header from './components/header'
import Content from './components/content'
import Footer from './components/footer'

function App(){
  const navigate = useNavigate()
  const [isAuthenticate, setAuthenticated] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)


  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token){
        setAuthenticated(true)
        console.log('autenticado')
    }
}, [])

useEffect(() => {
  if(!isAuthenticate){
      navigate('/login')
  }   
  else {
    navigate('/')
    console.log('ingresaste')
  }

}, [isAuthenticate])

useEffect(() => {
  if(!isAdmin) {
    navigate('/')
  }
}, [isAdmin])

  function onLogin(user,token){
        
    setAuthenticated(true)
    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(user))
    if(user.role === 'admin'){
      console.log('Ingresó el admin')
      setIsAdmin(true)     
    } else {
      setIsAdmin(false)
      console.log('Ingresó', user.name)
    }
    navigate('/')
}

  return  <>
        <Header>
          <header className='header'>
            <div className='header-container'>
            <div className="logo">
                <a href="/" id="logo">Fish & Lakes</a>
            </div>
            <nav id="menu">
                <ul id="hamburguesa">
                    <li><a href="#menu">abrir</a></li>
                    <li><a href="#">cerrar</a></li>
                </ul>
                <ul id="barra">
                    <li><a href="/">Home</a></li>
                    <li>
                    <Link to="/nuevo" className='nav-link'>Agregar Producto</Link>
                    </li>
                </ul>
            </nav>
            </div>
          </header>
        </Header>
        
        <Content>
          <Routes>

          <Route path='/' element={<HomePage/>}></Route>

          
          <Route path='/nuevo' element={<NewProduct></NewProduct>}></Route>

          <Route path='/products/:id' element={<ProductoDetalle />}></Route>

          <Route path='/*' element={<h1>Error 404</h1>}></Route>

          </Routes>
                    
          </Content>

          <Footer>
          <footer className="footer">
        <div className="footer-container">
            <div className="footer-direccion">
                <h2 data-aos="fade-up">Dirección</h2>
                <p>Dirección: Sarralegui 1344, Devoto</p>
            </div>
            <div className="footer-border"></div>
            <div className="footer-contacto">
                <h2 data-aos="fade-up">Contacto</h2>
                <p>Tel : +54 11 5566 8899</p>
                <p>Mail: clothesstore@gmail.com</p>
            </div>
            <div className="footer-border"></div>
            <div className="footer-redes">
                <h2 data-aos="fade-up">Redes</h2>
                <ul>
                    <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-whatsapp"></i></a></li>
                </ul>
            </div>
        </div>
        <div className="footer-copy">
            <p>Todos los Derechos Reservados - &copy; 2023 ClothesStore.com</p>
        </div>
    </footer>
          </Footer>
          </>
}

export default App
