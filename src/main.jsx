import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router'
import { Toaster } from 'react-hot-toast'
import ThemeProvider from './Provider/ThemeProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
      <Toaster
        position='top-right'
      />
    </ThemeProvider>
  </StrictMode>,
)
