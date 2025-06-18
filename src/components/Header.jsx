import CTAButton from "./CtsBtn"
import Navbar from "./Navbar.jsx"

export default function Header () {
    return(
        <header className="header">
            <span className="logo">FoodSpy</span>
           <Navbar/>
           <CTAButton/>
        </header>
    )
}