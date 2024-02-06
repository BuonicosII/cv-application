import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './components/App.jsx'
import './styles/style.css'


const winChurch = {
  name: "Winston", 
  surname: "Churchill", 
  phone: 44123123,
  email: "w.churchill@notrealmail.uk",
  born: new Date(1874, 10, 30),
  address: "10 Downing Street, London UK",
  education: [
    {
      institution: "Royal Military College Sandhurst",
      from: new Date("1893"),
      to: new Date("1895"),
      info: "Served as cavalry cadet",
    }
  ]
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App obj={winChurch} />
  </React.StrictMode>,
)
