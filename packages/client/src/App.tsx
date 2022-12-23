import { useEffect } from 'react'
import './styles/App.css'
import StartPage from './pages/startPage/StartPage'

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
  return <div className="App"><StartPage/></div>
}

export default App
