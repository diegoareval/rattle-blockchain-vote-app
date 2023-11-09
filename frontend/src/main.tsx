import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App'
import './global/styles/index.css'
import { MainProvider } from './providers/MainProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainProvider>
    <App />
    </MainProvider>
  </React.StrictMode>,
)
