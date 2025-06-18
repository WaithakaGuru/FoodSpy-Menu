import { TbSalad } from "react-icons/tb";
import { IoPizzaOutline } from "react-icons/io5";
import { BiDrink } from "react-icons/bi";
import { RiCake3Line } from "react-icons/ri";
import { IoFastFoodOutline } from "react-icons/io5";
import { LiaPepperHotSolid } from "react-icons/lia";

const navData = [
    { 
       icon: <IoFastFoodOutline />,
        category: "All"
    },
    { 
        icon: <BiDrink />,
        category: "Drinks"
    },
    { 
        icon: <IoPizzaOutline />,
        category: "Pizza"
    },
    { 
        icon: <TbSalad />,
        category: "Salad"
    },
    { 
        icon: <LiaPepperHotSolid/>,
        category: "Spicy"
    },
    { 
        icon: <RiCake3Line />,
        category: "Sweets"
    }
]
export default navData;