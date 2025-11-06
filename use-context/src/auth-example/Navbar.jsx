import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const NavBar = () => {
    const {isLoggedIn,login, logout } = useContext(AuthContext)

    return (
        <nav>
            {isLoggedIn ? (
                <button onClick={logout}>Logout</button>
            ) : (
                <button onClick={login}>Login</button>
            )}
        </nav>
    )
}

export default NavBar;