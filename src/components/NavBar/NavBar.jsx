import { Link } from "react-router-dom"
import NavItem from "../NavItem/NavItem"
import "./NavBar.css"


const Navbar = () => {
  return (
    <nav>
        <ul className="NavContainer">
          <Link to='/'>
            <NavItem title="All"/>
          </Link>
          <Link to='/category/shrine'>
            <NavItem title="Shrine"/>
          </Link>
          <Link to='/category/overose'>
            <NavItem title="Overose"/>
          </Link>
        </ul>
    </nav>
  )
}

export default Navbar