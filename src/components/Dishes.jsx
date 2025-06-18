import dishesData from "../data/dishes_data.js";
import { FaStar } from "react-icons/fa";

function Dish ({...props}) 
{
    return(
        <>
        <div className="dish-holder">
            <div className="image-holder">
                <img src={props.imagePath} alt="image" className="dish-image" />
                <span className="discount">{props.discount}</span>
                <span className={props.rating > 0? "rating": "unrated"}>
                    {props.rating > 0 && (
                            <>
                                <FaStar className="rating-star" />
                                {props.rating}.00
                            </>
                        )
                    }
                </span>
            </div>
            <div className="dish-info">
                <h3 className="dish-title">{props.dishTitle}</h3>
                <p className="dish-description">{props.dishInfo}</p>
                <span className="dish-price">${props.price}</span>
            </div>
        </div>
        </>
    )
}

export default function Dishes () {
    return(
       <div className="dish-container">
            {dishesData.map((dishData, idx) => 
                <Dish {...dishData} key={idx}/>
        )}
       </div>
    )
}
