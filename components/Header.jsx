import React, { useState, useEffect } from 'react'

function Header() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('isDarkMode')
    return saved ? JSON.parse(saved) : false
  })

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
    localStorage.setItem('isDarkMode', JSON.stringify(isDark))
  }, [isDark])

  return (
    <header>
      <div className="header-content">
        <p><a href="/">Back to Home</a></p>
        <p className="theme-changer" onClick={() => setIsDark(prev => !prev)}>
          <i className={`fa-solid fa-${isDark ? 'sun' : 'moon'}`}></i>&nbsp;&nbsp;
          <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
        </p>
      </div>
    </header>
  )
}

export default Header
