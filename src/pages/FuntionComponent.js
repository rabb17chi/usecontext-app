import React, { useState } from 'react'
import { userIdContext, userUpdate, useTheme, useThemeUpdate } from './ThemeContext'

const FunctionContextComponent = () => {
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()

    const userInfo = userUpdate()
    const userId = userIdContext()

    const [value22,setValue22] = useState('')

    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem'
    }

  return (
        <>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <div style={themeStyles}>Function Theme</div>
        <input type="text" onChange={e=>{setValue22(e.target.value)}}></input> 
        <button onClick={()=>{userInfo(value22)}}>Click to check user</button>
        <button onClick={()=>{userInfo(null)}}>Click to log out</button>
        <hr />
        <div>{userId? `Hi! Welcome to page! ${userId} `: 'Please register'}</div>
        <hr />
        <div>
            {userId ? 'User is log in with Id: "123"' : 'User is log out'}
        </div>
    </>
  )
}

export default FunctionContextComponent