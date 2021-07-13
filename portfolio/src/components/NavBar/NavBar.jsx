import { Link } from "react-router-dom"

import "./NavBar.scss"

export default function NavBar(){
    return(
        <nav className="navBar">
            <ul className="navBar__links">
                <li>
                    <Link to ="/">Home</Link>
                </li>
                <li>
                    <Link to ="/about">About</Link>
                </li>
                <li>
                    <Link to ="/other">Other</Link>
                </li>
                <li>
                    <Link to ="/contact">Contact</Link>
                </li>

            </ul>
        </nav>
    )
}