import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

/* Estilos de Ionic Base */
import '@ionic/react/css/core.css'
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Estilos de Tailwind */
import './index.css'

import { setupIonicReact } from '@ionic/react'

setupIonicReact()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)