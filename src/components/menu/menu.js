import {Link, NavLink} from "react-router-dom";

function Menu() {
    return (
        <>
            {/*<Link to={"/"}>Home</Link>*/}
            {/*<Link to={"/task-page"}>Task Page</Link>*/}

            <NavLink to="/"
                     style={({isActive}) =>
                         isActive ? {
                             color: "red",
                         } : undefined
                     }
            >Home</NavLink>
            <NavLink to={"/task-page"}
                     style={({isActive}) =>
                         isActive ? {
                             color: "red",
                         } : undefined
                     }>Task Page</NavLink>
        </>
    );
}

export default Menu;