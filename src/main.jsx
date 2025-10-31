import { StrictMode } from 'react'
import './App.css'
import { createRoot } from 'react-dom/client'
  import { RouterProvider } from 'react-router'
  import { router } from './routes/Routes'
import AuthProvider from './firebase/Auth/AuthProvider'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider><RouterProvider router={router} /> </AuthProvider>
    
    
  </StrictMode>,
)
