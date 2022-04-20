import Home from './components/Home'
import Login from './components/Login'
import hash from './hash'
import React, { useEffect, useState } from 'react'

function App () {
  const [token, setToken] = useState(false)

  // polling interval

  const handleToken = () => {
    setToken(true)
  }

  return (
    <div className='App'>
      {!token ? <Login handleToken={handleToken} /> : <Home token={token} />}

    </div>
  )
}

export default App
