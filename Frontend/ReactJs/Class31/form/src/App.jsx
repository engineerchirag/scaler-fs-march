import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/SignUp'
import SignIn from './components/SignIn'

function App() {
  return (
    <>
      <Signup />
      <SignIn />
    </>
  )
}

export default App
