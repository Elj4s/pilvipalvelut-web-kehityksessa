import { useState, useEffect } from 'react'
import './App.css'

function luoKoodinimi(): string {
  const elaimeet = ['Panda', 'Tiger', 'Fox', 'Dragon', 'Wolf']
  const adjektiivit = ['Sneaky', 'Happy', 'Crazy', 'Cool', 'Funny']

  const adjektiivi = adjektiivit[Math.floor(Math.random() * adjektiivit.length)]
  const elain = elaimeet[Math.floor(Math.random() * elaimeet.length)]
  const numero = Math.floor(Math.random() * 100)

  return adjektiivi + elain + numero
}

function App() {
  const [koodinimi, asetaKoodinimi] = useState('')

  useEffect(() => {
    let tallennettuNimi = localStorage.getItem('codename')

    if (!tallennettuNimi) {
      tallennettuNimi = luoKoodinimi()
      localStorage.setItem('codename', tallennettuNimi)
    }

    asetaKoodinimi(tallennettuNimi)
  }, [])

  return (
    <div className="container">
      <h1>Koodinimigeneraattori</h1>
      <h2>Tervetuloa!</h2>
      <p>Koodinimesi on:</p>
      <h2>{koodinimi}</h2>
    </div>
  )
}
export default App