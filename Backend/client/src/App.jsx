import './App.css'
import { Link, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Register from './pages/Register'
import Notfound from './pages/Notfound'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <>
<Routes>
<Route path='/' element={<Homepage/>} />
<Route path='/login' element={<Login/>} />
<Route path='/register' element={<Register/>} />
<Route path='/dashboard' element={<Dashboard/>} />
<Route path= '*' element={<Notfound/>} />

</Routes>

    </>
  )
}

export default App
