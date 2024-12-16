import React from 'react'

const Profile = () => {
  return (
    <>
      <h1 className='m-3'>Perfil</h1>
      <div className='d-flex flex-column align-items-center justify-content-center'>

        <p className='m-3 bg-warning text-light'>Email: ejemplousuario@mail.com </p>
        <button className='btn btn-dark mt-3 mb-5' type='submit'>
          Cerrar Sesión
        </button>
      </div>
    </>
  )
}

export default Profile
