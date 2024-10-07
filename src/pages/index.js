import React from 'react'
import App from './App'
import ThemeProvider from './ThemeContext'

const index = () => {
  return (
    <ThemeProvider>
        <App />
    </ThemeProvider>
  )
}

export default index