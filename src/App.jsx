import './App.css'
import React from 'react'
import Search from './components/Search.jsx'

const App = () => {
  return (
    <main>
    <div className="pattern"/>
    
    <div className='wrapper'>
      <header>
        <img src="./hero.png" alt="Hero Banner" />
        <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without hassle</h1>
      </header>

      <search />
    </div>
    
      <Search />
    </main>
  )
}

export default App
