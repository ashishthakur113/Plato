import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvide from './context/StoreContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StoreContextProvide>
    <App />
    </StoreContextProvide>
  </BrowserRouter>
)
