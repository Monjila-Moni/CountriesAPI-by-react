import React from 'react'

function Header() {
  return (
    <>
      <header>
        <div className="header-content">
            <p><a href="/">Back to Home</a></p>
            <p className="theme-changer"><i className="fa-regular fa-moon"> &nbsp;&nbsp;</i> <span>Dark Mode</span></p>
        </div>
    </header>
    </>
  )
}

export default Header
