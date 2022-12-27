import { useEffect } from 'react'
import './App.css'
import Login from './Pages/Login/index'
import { CssBaseline } from '@mui/material'

function App() {
  useEffect(() => {
    const fetchServerData = async () => {
      const url = `http://localhost:${__SERVER_PORT__}`
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
    }

    fetchServerData()
  }, [])
  return (
    <>
      <CssBaseline />
      <Login />
    </>
  )
}

export default App
