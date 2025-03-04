import { NavLink } from "react-router-dom"

const Header=()=>{
    return(
        <>
        <nav>
            <section>
                <div className="Header-container">
                <ul className="Header">
                    <NavLink to={"/"}><li>Home</li></NavLink>
                    <NavLink to={"/about"}><li>About</li></NavLink>
                    <NavLink to={"/services"}><li>Services</li></NavLink>
                    <NavLink to={"/contact"}><li>Contact</li></NavLink>
                    <NavLink to={"/login"}><li>login</li></NavLink>
                </ul>
                </div>
            </section>
        </nav>
        </>
    )
}
export default Header