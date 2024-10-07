import React from 'react'
import { userIdContext } from './ThemeContext'

const ShowUser = () => {
    const userId = userIdContext()

  return (
    <>
    <p> {userId ? `i am ok ${userId}` : 'not log in'} </p>
    </>
  )
}

export default ShowUser