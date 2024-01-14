import { useState } from 'react'
import './App.css'
import Header from './Header'
import VirtualHealthcare from './VirtualHealthcare'
import Services from './Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <VirtualHealthcare/>
    <Services/>
    </>
  )
}

export default App
