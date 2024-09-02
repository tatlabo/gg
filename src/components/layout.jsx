import { Children, useEffect, useRef, useState } from "react"
import { Outlet } from "react-router-dom"
import { NavLink, Link, useParams, useLocation } from "react-router-dom"


export default function Layout({ navbarList, worksList }) {
    return (<>
        <Navbar navbarList={navbarList} worksList={worksList}>
            <Dropdown worksList={worksList} path={'works'}/>
        </Navbar>
        <Outlet/>
        </>
    )
}

function Dropdown({worksList, path}) {

    const dropdownList = worksList.map(item => {
        return <li key={item.toLowerCase()}>
                <NavLink 
                to={`/${path}/${item.toLowerCase()}`} >
                    {item}
                </NavLink>
                </li>
    })

    return (<ul className="dropdownmenu">{dropdownList}</ul>)
}

function Navbar({ children }) {
    const loaction = useLocation()
    const active = location.pathname.slice(1).split('/')
    console.log(active)

    const [menu, setMenu] = useState(false)
    console.log(`Navbar rendered`)
    const menuItem = 'works'

    
    function handleClick(event) {
        if( event.target.id !== menuItem ) {
            setMenu(() => false )
        } else {
            setMenu((prev) => prev = !prev)
        }
    }

    useEffect(() => {
        document.addEventListener("click", handleClick)
        return () => document.removeEventListener("click", handleClick)
    }
    , [])

    const logoImg ='https://gosiagajewska.com/wpgg/wp-content/uploads/2021/09/Logo-Gosia-Gajewska_new_scalone_yellow_172.png'
    

    return (
    <nav  id="dropdown">
        <Link to='/' className="logo"><img src={logoImg} className="logo"/></Link>
        <div className="menuWorks">
            <div id={menuItem}  className={ active.includes(menuItem) ? 'active'  : ""} >Works</div >
            { menu  && children }
        </div>

        <NavLink to='bio'>Bio</NavLink>
        <NavLink to='Contact'>Contact</NavLink>
    </nav>
    )
}