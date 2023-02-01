import BrandLogo from "../BrandLogo/BrandLogo"
import CartWidget from "../CartWidget/CartWidget"
import NavBar from "../NavBar/NavBar"
import "./Header.css"


const Header = () => {
  return (
    <header>
        <div className="Header">
            <BrandLogo/>
            <NavBar/>
            <CartWidget/>
        </div>
    </header>
  )
}

export default Header