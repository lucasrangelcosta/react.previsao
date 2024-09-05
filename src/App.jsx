import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function searchCity(){

  }

  return (
    <div>
      <h1>DevClube Previsão do Tempo</h1>
      <input type='text' placeholder='Digite o nome da cidade'/>
      <button onClick={searchCity}>Buscar</button>
    </div>
  )
}

export default App
