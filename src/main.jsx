import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/home/home.page';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const root = document.getElementById("root")
const rootElem = ReactDOM.createRoot(root)

rootElem.render(
  <React.StrictMode>
    <HomePage></HomePage>
  </React.StrictMode>
)
