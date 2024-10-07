import {createContext, useContext, useState} from "react";

const ThemeContext = createContext()
const ThemeUpdateContext = createContext()

const UserContext = createContext()
const UserUpdateContext = createContext()

export function useTheme(){
    return useContext(ThemeContext)
}
export function useThemeUpdate(){
    return useContext(ThemeUpdateContext)
}

export function userIdContext() {
    return useContext(UserContext)
}
export function userUpdate() {
    return useContext(UserUpdateContext)
}

export default function ThemeProvider({children}) {
    const [darkTheme, setDarkTheme] = useState(true)
    const [username,setUsername] = useState(null)

    function toggleTheme() {
        setDarkTheme(darkTheme => !darkTheme)
    }
    function setUser(data){
        setUsername(data)
    }

return (
    <ThemeContext.Provider value={darkTheme}>
        <ThemeUpdateContext.Provider value={toggleTheme}>
            <UserContext.Provider value={username}>
                <UserUpdateContext.Provider value={setUser}>
                    {children}
                </UserUpdateContext.Provider>
            </UserContext.Provider>
        </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
)
}