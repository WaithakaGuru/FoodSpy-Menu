import Dishes from "./components/Dishes";
import Header from "./components/Header";
import './foodspy.css'

function FoodSpy() {
    return(
       <>
            <Header/>
            <Dishes/>
            <footer>
                <h2>Welcome Again to FoodSpy</h2>
                <div>
                    <span>FoodSpy &copy; 2025</span>
                    <span>Built with &hearts; by Waithaka</span>
                   <a href="https://github.com/WaithakaGuru">Visit: WaithakaGuru</a> 
                </div>
            </footer>
        </>
    )
}

export default FoodSpy;