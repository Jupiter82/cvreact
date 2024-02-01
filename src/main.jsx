import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/home/home.page';
import { BrowserRouter } from 'react-router-dom';


const root = document.getElementById("root")
const rootElem = ReactDOM.createRoot(root)

rootElem.render(
  <React.StrictMode>
    <BrowserRouter>
      <HomePage></HomePage>
    </BrowserRouter>
  </React.StrictMode>
)
