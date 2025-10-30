import { Link } from "react-router-dom"

function Navbar(){

    return (
        <nav className="navbar">
            <Link className="logo" to="/">
                <h2>🎬 Movie Explorer</h2>
            </Link>
            <Link to="/">Home</Link>
        </nav>
    )
}

export default Navbar;