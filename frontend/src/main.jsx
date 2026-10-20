import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import { RouterProvider } from 'react-router'
import { router } from './routes/Routes'
import AuthProdiver from './context/AuthContext/AuthProdiver'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProdiver>
    <RouterProvider router={router}></RouterProvider>
   </AuthProdiver>
  </StrictMode>,
)
