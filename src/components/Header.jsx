import CTAButton from "./CtsBtn"
import Navbar from "./Navbar"

export default function Header () {
    return(
        <header className="header">
           <Navbar/>
           <CTAButton/>
        </header>
    )
}