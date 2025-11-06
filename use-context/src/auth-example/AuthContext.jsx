import { Children, createContext, useState } from "react";

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const login = () => setIsLoggedIn(true);
    const logout = () => setIsLoggedIn(false);

    return (
        <AuthContext.Provider value={{isLoggedIn,login, logout }} >
            { children }
        </AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext}