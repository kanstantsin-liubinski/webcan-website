import { useState } from 'react'
import './App.css'
import LinkedInBanner from './LinkedInBanner'

function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleContact = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <div className="app">

      {/* LinkedIn Banner */}
      <LinkedInBanner />

      </div>
  )
}

export default App
