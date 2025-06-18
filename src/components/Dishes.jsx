import dishesData from "../data/dishes_data";
import { FaStar } from "react-icons/fa";

function Dish (props) 
{
    return(
        <>
        <div className="dish-holder">
            <div className="image-holder">
                <img src={props.imagePath} alt="image" className="dish-image" />
                <span className="discount">{props.discount}</span>
                <span className="rating">
                    <FaStar className="rating-star"/>
                    {props.rating}
                </span>
            </div>
            <div className="dish-info">
                <h3 className="dish-title">{props.dishTitle}</h3>
                <p className="dish-description">{props.dishInfo}</p>
                <span className="dish-price">{props.price}</span>
            </div>
        </div>
        </>
    )
}

export default function Dishes () {
    return(
       <div className="dish-container">
            {dishesData.forEach(dishData => {
                <Dish props={dishData} />
            })}
       </div>
    )
}