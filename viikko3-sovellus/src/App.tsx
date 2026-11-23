import { useState, useEffect } from 'react'
import './App.css'
import { onAuthStateChanged } from 'firebase/auth'
import type { User } from 'firebase/auth'
import LoginForm from './LoginForm'
import { auth, logout } from './authService'

function luoKoodinimi(): string {
  const elaimeet = ['Panda', 'Tiger', 'Fox', 'Dragon', 'Wolf']
  const adjektiivit = ['Sneaky', 'Happy', 'Crazy', 'Cool', 'Funny']

  const adjektiivi = adjektiivit[Math.floor(Math.random() * adjektiivit.length)]
  const elain = elaimeet[Math.floor(Math.random() * elaimeet.length)]
  const numero = Math.floor(Math.random() * 100)

  return adjektiivi + elain + numero
}

function App() {
  const [user, setUser] = useState<User | null>(null)
  const [koodinimi, asetaKoodinimi] = useState('')

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser)

      if (firebaseUser) {
        const avain = 'codename_' + firebaseUser.uid
        let tallennettuNimi = localStorage.getItem(avain)

        if (!tallennettuNimi) {
          tallennettuNimi = luoKoodinimi()
          localStorage.setItem(avain, tallennettuNimi)
        }

        asetaKoodinimi(tallennettuNimi)
      } else {
        asetaKoodinimi('')
      }
    })

    return () => unsubscribe()
  }, [])

  return (
    <div className="container">
      {user ? (
        <>
          <h1>Koodinimigeneraattori</h1>
          <h2>Tervetuloa, {koodinimi}</h2>
          <p>Sähköposti: {user.email}</p>
          <button onClick={logout}>Kirjaudu ulos</button>
        </>
      ) : (
        <LoginForm />
      )}
    </div>
  )
}

export default App