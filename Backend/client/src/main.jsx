import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import tailwindConfig from '../tailwind.config.js'
// import tailwindConfig from '../tailwind.config.js'
import './index.css'
import { Provider } from 'react-redux'

import App from './App.jsx'
import Homepage from './pages/Homepage.jsx'
import { BrowserRouter } from 'react-router-dom'
import store from './Redux/Store.js'



createRoot(document.getElementById('root')).render(

<Provider store={store}>
<BrowserRouter>
<StrictMode>
    <App />
  </StrictMode>
  </BrowserRouter>
  </Provider>
)
