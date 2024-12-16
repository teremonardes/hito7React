import { createContext, useState } from 'react'

export const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true)
  const logout = () => {
    setToken(false)
  }
  const login = () => {
    setToken(true)
  }

  const stateGlobal = {
    token, logout, login
  }
  console.log('UserContext State:', stateGlobal)
  return (

    <UserContext.Provider value={stateGlobal}>{children}</UserContext.Provider>

  )
}

export default UserProvider
