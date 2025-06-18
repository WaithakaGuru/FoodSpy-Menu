import { TbSalad } from "react-icons/tb";
import { IoPizzaOutline } from "react-icons/io5";
import { BiDrink } from "react-icons/bi";
import { RiCake3Line } from "react-icons/ri";
import { IoFastFoodOutline } from "react-icons/io5";
import { LiaPepperHotSolid } from "react-icons/lia";

const navData = [
    { 
        All: {
            icon: <IoFastFoodOutline />,
            category: "All"
        }
    },
    { 
        Drinks: {
            icon: <BiDrink />,
            category: "Drinks"
        }
    },
    { 
        Pizza: {
            icon: <IoPizzaOutline />,
            category: "Pizza"
        }
    },
    { 
        Salad: {
            icon: <TbSalad />,
            category: "Salad"
        }
    },
    { 
        Spicy: {
            icon: <LiaPepperHotSolid/>,
            category: "Spicy"
        }
    },
    { 
        Sweets: {
            icon: <RiCake3Line />,
            category: "Sweets"
        }
    }
]
export default navData;