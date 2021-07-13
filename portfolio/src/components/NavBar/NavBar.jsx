import { Link } from "react-router-dom"

export default function NavBar(){
    return(
        <nav className="navBar">
            <ul className="navBar__links">
                <li>
                    <Link to ="/">Home</Link>
                </li>
                <li>
                    <Link to ="/">About</Link>
                </li>
                <li>
                    <Link to ="/">Other</Link>
                </li>
                <li>
                    <Link to ="/">Contact</Link>
                </li>

            </ul>
        </nav>
    )
}