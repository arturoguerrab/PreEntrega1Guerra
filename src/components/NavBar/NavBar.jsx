import NavItem from "../NavItem/NavItem"
import "./NavBar.css"


const Navbar = () => {
  return (
    <nav>
        <ul className="NavContainer">
            <NavItem title="Velas" link="#"/>
            <NavItem title="Encendedores" link="#"/>
            <NavItem title="Aceites" link="#"/>
        </ul>
    </nav>
  )
}

export default Navbar