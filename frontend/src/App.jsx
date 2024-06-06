import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import FoodList from './components/FoodList'
import SearchBox from './components/SearchBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Yummy Food</h1>
    <FoodList/>
    </>
  )
}

export default App
