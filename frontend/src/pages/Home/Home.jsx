import './Home.css'
import Header from '../../components/Header/Header.jsx'
import CardPizza from '../../components/CardPizza/CardPizza.jsx'
import { ContextPizzas } from '../../context/FetchContext.jsx'
import { CartContext } from '../../context/CartContext.jsx'
import { useContext } from 'react'

const Home = () => {
  const { pizzas } = useContext(ContextPizzas)
  const { increaseQuantity } = useContext(CartContext)
  return (
    <>
      <Header />
      <div className='container'>
        <div className='row'>
          {pizzas.map((pizza) => (
            <div className='col-12 col-md-4 mb-5 mt-4' key={pizza.id}>
              <CardPizza
                id={pizza.id}
                name={pizza.name}
                price={pizza.price}
                desc={pizza.desc}
                ingredients={pizza.ingredients}
                img={pizza.img}
                onAddToCart={(id) => increaseQuantity(id)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
