import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/sass/main.scss'
import App from './App.jsx'
import ContextProvider from "./Context/Context.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <App/>
    </ContextProvider>
  </StrictMode>,
)
