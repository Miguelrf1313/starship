import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'

import './style.css'
import { Firstpage } from './Routers/Firstpage'

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Firstpage />
    </BrowserRouter>
)
