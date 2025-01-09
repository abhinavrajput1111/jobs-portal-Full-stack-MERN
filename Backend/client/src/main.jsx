import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import tailwindConfig from '../tailwind.config.js'
// import tailwindConfig from '../tailwind.config.js'
import './index.css'

import App from './App.jsx'
import Homepage from './pages/Homepage.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(

<BrowserRouter>
<StrictMode>
    <App />
  </StrictMode>
  </BrowserRouter>
)
