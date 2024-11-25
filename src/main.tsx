import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GlobalStyles } from './Styled.app.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles/>
    <App />
  </StrictMode>,
)