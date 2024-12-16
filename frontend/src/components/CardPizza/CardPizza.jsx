import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const CardPizza = ({ id, name, price, desc, ingredients, img, onAddToCart }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={img} />
      <Card.Body>
        <Card.Title>Pizza {name}</Card.Title>
        <div className='texto'>
          <div className='precio'>${price}</div>
          <div className='descripcion'>{desc}</div>
          <ul className='ingredientes'>
            🍕Ingredientes:
            {ingredients && ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className='botones d-flex justify-content-between'>
          <NavLink to={`/pizza/${id}`}><Button variant='light'>Ver más 👀</Button></NavLink>
          <Button
            variant='dark'
            onClick={() => onAddToCart(id, name, price)}
          >
            Añadir 🛒
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default CardPizza
