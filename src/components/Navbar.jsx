import navData from "../data/nav_data"

function Nav ({props}){
    return(
        <div className={"nav-item"}>
            <div className="icon">{props.icon}</div>
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