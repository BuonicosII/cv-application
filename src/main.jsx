import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './components/App.jsx'
import './styles/style.css'
import { v4 as uuidv4 } from 'uuid';


const winChurch = {
  name: "Winston", 
  surname: "Churchill", 
  phone: 44123123,
  email: "w.churchill@notrealmail.uk",
  born: new Date(1874, 10, 30),
  address: "10 Downing Street, London UK",
  education: [
    { 
      id: uuidv4(),
      institution: "Harrow School",
      from: "1886",
      to: "1890",
      info: "I was on the whole considerably discouraged by my school days.",
    },
    {
      id: uuidv4(),
      institution: "Royal Military College Sandhurst",
      from: "1893",
      to: "1895",
      info: "It shows that I could learn quickly the things that matter.",
    }
  ],
  experience: [
    {
      id: uuidv4(),
      role: "First Lord of the Admiralty",
      from: "1911",
      to: "1915",
      info: "Lead with mixed success the Straits Campaign"
    },
    {
      id: uuidv4(),
      role: "Prime Minister",
      from: "1940",
      to: "1945",
      info: "Lead the UK and the Allies to Victory in WW2"
    }
  ]
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App obj={winChurch} />
  </React.StrictMode>,
)
