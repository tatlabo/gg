import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom"

export default function Layout(items = {...props}) {
    return (<>
        <Navbar navList={ items.props }/>
        <Outlet/>
        </>
    )
}


function Navbar(props) {

    const navList = {...props}.navList.map(item => {
        return <NavLink to={item.toLowerCase()} key={item.toLowerCase()}>{item}</NavLink>
    })

    return (
    <nav>
        { navList }
    </nav>
    )
}