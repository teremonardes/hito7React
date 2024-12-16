import { useState } from 'react'
import './Register.css'

const RegisterPage = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [passConfirm, setPassConfirm] = useState('')
  const [empty, setEmpty] = useState(false)
  const [length, setLenght] = useState(false)
  const [same, setSame] = useState(false)
  const [success, setSuccess] = useState(false)
  // const [state, setState] = useState(valor_inicial);

  const ValidarInputs = (e) => {
    e.preventDefault()

    setEmpty(false)
    setLenght(false)
    setSame(false)
    setSuccess(false)

    if (!email.trim() || !pass.trim() || !passConfirm.trim()) {
      setEmpty(true)
      return
    }
    if (pass.length < 6) {
      setLenght(true)
      return
    }
    if (pass !== passConfirm) {
      setSame(true)
      return
    }
    setSuccess(true)
    setEmail('')
    setPass('')
    setPassConfirm('')
  }

  return (
    <>
      <h1 className='m-3'>Formulario de Registro</h1>
      <form onSubmit={ValidarInputs}>
        {empty
          ? <p className='error'>Todos los campos son obligatorios</p>
          : null}
        {length
          ? <p className='error'>Contraseña debe tener mínimo 6 carácteres</p>
          : null}
        {same
          ? <p className='error'>La confirmación debe ser igual a la contraseña</p>
          : null}
        {success
          ? <p className='success'>¡Te has registrado con éxito!</p>
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
          <input
            type='password'
            className='form-control mb-3' name='PassConfirm'
            onChange={(e) => setPassConfirm(e.target.value)}
            value={passConfirm}
            placeholder='Confirma tu contraseña'
          />
        </div>
        <button className='btn btn-dark mt-3 mb-5' type='submit'>
          Registrarme
        </button>
      </form>
    </>
  )
}

export default RegisterPage
