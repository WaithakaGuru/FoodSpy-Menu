import navData from "../data/nav_data"

function Nav ({props}){
    return(
        <div className={"nav-item"}>
            {props.icon}
            {props.category}
        </div>
    )
}

export default function Navbar () {
    return(
        <div className="nav-holder">
            { 
               navData.map((nav, idx)=>
                 <Nav props={nav} key={idx}/>) 
            }
        </div>
    )
}