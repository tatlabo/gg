import { Outlet } from "react-router-dom"
import { NavLink, Link } from "react-router-dom"

export default function Layout(items = {...props}) {
    return (<>
        <Navbar navList={ items.props }/>
        <Outlet/>
        </>
    )
}


function Navbar(props) {

    const logoImg ='https://gosiagajewska.com/wpgg/wp-content/uploads/2021/09/Logo-Gosia-Gajewska_new_scalone_yellow_172.png'

    const navList = {...props}.navList.map(item => {
        return <NavLink to={item.toLowerCase()} key={item.toLowerCase()}>{item}</NavLink>
    })

    const logo = <Link to='/' className="logo"><img src={logoImg} className="logo"/></Link>

    return (
    <nav>
        { logo }
        { navList }
    </nav>
    )
}