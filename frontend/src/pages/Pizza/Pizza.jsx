import { useEffect, useState } from 'react'
import CardPizza from '../../components/CardPizza/CardPizza'
import { useParams } from 'react-router-dom'

const Pizza = () => {
  const [pizza, setPizza] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const getPizza = async () => {
      const res = await fetch(`http://localhost:5000/api/pizzas/${id}`)
      const data = await res.json()
      setPizza(data)
    }
    getPizza()
  }, [])
  if (!pizza) {
    return <p>Cargando pizza...</p>
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-md-4 mb-5 mt-4' key={pizza.id}>
          <CardPizza
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
            desc={pizza.desc}
          />
        </div>

      </div>
    </div>
  )
}

export default Pizza
