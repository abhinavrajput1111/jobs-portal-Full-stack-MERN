import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Modal from './Modal/Modal.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Modal />
    </>
  )
}

export default App
