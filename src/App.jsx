import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='max-w-7xl mx-auto'>
    <Header></Header>
    <Banner></Banner>
    </div>
  )
}

export default App
