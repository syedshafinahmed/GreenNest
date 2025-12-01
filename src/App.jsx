import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Import AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  const [count, setCount] = useState(0)

  // Initialize AOS once when App mounts
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      easing: 'ease-in-out', // easing function
      once: false, // whether animation should happen only once
    })
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 data-aos="fade-up">Vite + React</h1>
      <div className="card" data-aos="zoom-in">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs" data-aos="fade-left">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
