import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { UserContext } from '../../context/UserContext'

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, calculateTotal } = useContext(CartContext)
  const { token } = useContext(UserContext)
  return (
    <div className='container mx-auto'>
      <h1>Detalles del pedido:</h1>
      <div className='d-flex row col-12 mb-4 flex-md-row align-items-center px-5'>
        {cart.map((pizza) => (
          <div key={pizza.id} className=' d-flex align-items-center justify-content-between border p-3 rounded shadow-sm mb-3'>
            <div className='d-flex align-items-center '>
              <img src={pizza.img} className='img-fluid rounded' style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
              <h3 className='mx-2 text-capitalize'>{pizza.name}</h3>
            </div>
            <div className='d-flex align-items-center '>
              <h3 className='mx-2'>${pizza.price}</h3>
              <button className='btn btn-outline-danger btn-sm' onClick={() => decreaseQuantity(pizza.id)}>-</button>
              <span className='mx-2'>{pizza.count}</span>
              <button className='btn btn-outline-info btn-sm' onClick={() => increaseQuantity(pizza.id)}>+</button>
            </div>

          </div>
        ))}
      </div>
      <div className='mb-5 px-5 text-center'>
        <h3>Total: ${calculateTotal()}</h3>
        <button className='btn btn-dark' disabled={!token}>{token ? 'Pagar' : 'Debes iniciar sesión para poder pagar'}</button>
      </div>

    </div>
  )
}

export default Cart
