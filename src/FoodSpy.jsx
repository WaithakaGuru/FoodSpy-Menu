import Dishes from "./components/Dishes";
import Header from "./components/Header";
import './foodspy.css'

function FoodSpy() {
    return(
       <>
            <Header/>
            <Dishes/>
            {/* <footer>
                Welcome Again to Food Spy
                Hunt for your dish
            </footer> */}
        </>
    )
}

export default FoodSpy;