import React from 'react'
import '../../css/header/header.css'
import LogInHandler from './LogInHandler'

const Header = () => {
    return (
        <header className="App-header">
          <section className="App-hl">
            <h1>THE WAVE</h1>
          </section>

          <section className="App-hr">
            <LogInHandler />
          </section>
        </header>
    )
}

export default Header;