import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import './ReactRouterDom.css'

export default function ReactRouterDom() {
    return (
        <div className="ReactRouterDom">
              <header>
                <nav>
                    <ul>
                        <li className="firstLi">
                            <Link className="link"  to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link className="link" to={"/About"}>About</Link>
                        </li>
                        <li>
                            <Link className="link" to={"/Contact"}>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact/>} />
            </Routes>
        </div>
    )
}
