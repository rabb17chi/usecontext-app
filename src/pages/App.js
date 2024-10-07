import React from 'react'

import FunctionContextComponent from './FuntionComponent'

import { userIdContext } from './ThemeContext'


const App = () => {
    const userId = userIdContext()
  return (
    <>
        <FunctionContextComponent />
    </>
  )
}

export default App