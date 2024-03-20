import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// import { PI as numeroPi, GTM_BRASIL } from './teste'
// import nomes from './nomes.js'

import './global.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* {GTM_BRASIL} / 
    { numeroPi } */}
    <App />
  </React.StrictMode>,
)
