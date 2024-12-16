import { createContext, useState, useContext } from 'react'

import { ContextPizzas } from './FetchContext'

export const CartContext = createContext()

const CartProvider = ({ children }) => {
  const { pizzas } = useContext(ContextPizzas)
  const [cart, setCart] = useState([])
  const increaseQuantity = (id) => {
    setCart((prevCart) => {
      const pizzaIndex = prevCart.findIndex((pizza) => pizza.id === id)
      if (pizzaIndex !== -1) {
        const newCart = [...prevCart]
        newCart[pizzaIndex] = {
          ...newCart[pizzaIndex],
          count: newCart[pizzaIndex].count + 1
        }
        return newCart
      } else {
        const pizzaToAdd = pizzas.find((pizza) => pizza.id === id)
        if (pizzaToAdd) {
          return [...prevCart, { ...pizzaToAdd, count: 1 }]
        }
        return prevCart
      }
    })
  }

  const decreaseQuantity = (id) => {
    setCart((prevCart) => {
      const pizzaIndex = prevCart.findIndex((pizza) => pizza.id === id)
      if (pizzaIndex !== -1) {
        const newCart = [...prevCart]
        const newCount = newCart[pizzaIndex].count - 1
        if (newCount > 0) {
          newCart[pizzaIndex] = { ...newCart[pizzaIndex], count: newCount }
          return newCart
        } else {
          return prevCart.filter((pizza) => pizza.id !== id)
        }
      }
      return prevCart
    })
  }

  const calculateTotal = () => {
    return cart.reduce((total, pizza) => total + pizza.price * pizza.count, 0)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        increaseQuantity,
        decreaseQuantity,
        calculateTotal
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
