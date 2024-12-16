import { createContext, useEffect, useState } from 'react'

export const ContextPizzas = createContext()

const FetchPizzas = ({ children }) => {
  const [pizzas, setPizzas] = useState([])
  useEffect(() => {
    getPizzas()
  }, [])
  const getPizzas = async () => {
    const res = await fetch('http://localhost:5000/api/pizzas')
    const data = await res.json()
    setPizzas(data)
  }
  const statePizzas =
    {
      pizzas
    }

  return <ContextPizzas.Provider value={statePizzas}>{children}</ContextPizzas.Provider>
}

export default FetchPizzas
