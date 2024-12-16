import { useState } from 'react'
import './Login.css'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [empty, setEmpty] = useState(false)
  const [length, setLenght] = useState(false)
  const [success, setSuccess] = useState(false)
  // const [state, setState] = useState(valor_inicial);

  const ValidarInputs = (e) => {
    e.preventDefault()

    setEmpty(false)
    setLenght(false)
    setSuccess(false)

    if (!email.trim() || !pass.trim()) {
      setEmpty(true)
      return
    }
    if (pass.length < 6) {
      setLenght(true)
      return
    }

    setSuccess(true)
    setEmail('')
    setPass('')
  }

  return (
    <>
      <h1 className='m-3'>Accede a tu cuenta</h1>
      <form onSubmit={ValidarInputs}>
        {empty
          ? <p className='error'>Todos los campos son obligatorios</p>
          : null}
        {length
          ? <p className='error'>Contraseña debe tener mínimo 6 carácteres</p>
          : null}

        {success
          ? <p className='success'>¡Has accedido a tu cuenta con éxito!</p>
          : null}

        <div className='form-group'>
          <input
            type='email'
            className='form-control mb-3' name='Email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder='Ingresa tu email'
          />
          <input
            type='password'
            className='form-control mb-3' name='Pass'
            onChange={(e) => setPass(e.target.value)}
            value={pass}
            placeholder='Ingresa tu contraseña'
          />

        </div>
        <button className='btn btn-dark mt-3 mb-5' type='submit'>
          Acceder
        </button>
      </form>
    </>
  )
}

export default LoginPage
