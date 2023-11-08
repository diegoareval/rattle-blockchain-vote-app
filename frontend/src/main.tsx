import { ApolloProvider } from '@apollo/client'
import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App'
import client from "./config/apollo"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
  </React.StrictMode>,
)
