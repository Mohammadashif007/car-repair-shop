import { useState } from 'react'
import './App.css'
import Main from './Layout/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Main></Main>
    </div>
  )
}

export default App
