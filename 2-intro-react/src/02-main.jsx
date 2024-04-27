import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const h1 = React.createElement('h1', null, 'Hola Mundo');

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  //  <App/>
  //</React.StrictMode>,
  h1
)
