import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
  return (
    <Container className='notFound'>
      <h1>404</h1>
      <h2>La página que estás buscando no se encuentra</h2>
      <Link to='/' className='btn btn-dark'>Prueba volviendo al inicio</Link>
    </Container>
  )
}

export default NotFound
