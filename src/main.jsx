import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { GlobalContextProvider } from '../src/Context/GlobalContext'

ReactDOM.createRoot(document.getElementById('root')).render(
 //de esta forma nuestra aplicacion esta contenida en el navegador con todas sus rutas y componentes
<BrowserRouter>
    <GlobalContextProvider>
        <App />
    </GlobalContextProvider>
</BrowserRouter>
)