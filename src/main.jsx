import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { store } from './app/store'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  
)
