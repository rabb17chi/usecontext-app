import React from 'react'

import FunctionContextComponent from './FuntionComponent'
import Link from 'next/link'


const App = () => {
  return (
    <>
        <FunctionContextComponent />
        < hr/>
        <Link href='./ShowUser'>Show Me</Link>
    </>
  )
}

export default App