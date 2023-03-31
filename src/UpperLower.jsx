import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './home'

function UpperLower() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            </ul>
      
    </div>
  )
}

export default UpperLower
