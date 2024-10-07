import React, { useState } from 'react'
import { userIdContext, userUpdate, useTheme, useThemeUpdate } from './ThemeContext'

const FunctionContextComponent = () => {
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()

    const userId = userIdContext()
    const userLoginLogout = userUpdate()

    const [username,setUsername] = useState()

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
        
        <input type="text" onChange={e=>{setUsername(e.target.value)}}></input> 
        <button onClick={()=>{userLoginLogout(username)}}>Click to check user</button>
        <button onClick={()=>{userLoginLogout(null)}}>Click to log out</button>
        <hr />
        <div>{userId? `Hi! Welcome to page! ${userId} `: 'Please register'}</div>
        <hr />
        <div>
            {userId ? 'Logined' : 'User is log out'}
        </div>
    </>
  )
}

export default FunctionContextComponent