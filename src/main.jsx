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
      institution: "Harrow School",
      from: "1886",
      to: "1890",
      info: "I was on the whole considerably discouraged by my school days.",
    },
    {
      institution: "Royal Military College Sandhurst",
      from: "1893",
      to: "1895",
      info: "It shows that I could learn quickly the things that matter.",
    }
  ]
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App obj={winChurch} />
  </React.StrictMode>,
)
