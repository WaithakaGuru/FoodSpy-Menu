import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FoodSpy from './FoodSpy'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FoodSpy />
  </StrictMode>,
)
