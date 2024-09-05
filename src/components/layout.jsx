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
        return <li key={item.toLowerCase()} id='menulist' data-id='menulist'>
                <NavLink 
                    to={`/${path}/${item.toLowerCase()}`} 
                    data-id='menulist'
                >
                    {item}
                </NavLink>
                </li>
    })

    return (<ul className="dropdownmenu" data-id='menulist'>{dropdownList}</ul>)
}

function Navbar({ children }) {

    const logoImg ='https://gosiagajewska.com/wpgg/wp-content/uploads/2021/09/Logo-Gosia-Gajewska_new_scalone_yellow_172.png'
    const loaction = useLocation()
    const active = location.pathname.slice(1).split('/')
    const [menu, setMenu] = useState(false)

    const menuItem = 'works'
    const menuWork = 'work'
    
    function handleClick(event) {
        switch (event.target.dataset.id) {
            case menuItem:
                setMenu((prev) => prev = !prev); break
            case 'menulist': 
                setMenu(() =>  true); break
            default:
                setMenu(() => false);
        }
    }

    useEffect(() => {
        document.addEventListener("click", handleClick)
        return () => document.removeEventListener("click", handleClick)
    }
    , [])

    

    return (
    <nav  id="dropdown">
        <Link to='/' className="logo"><img src={logoImg} className="logo"/></Link>
        <div className="menuWorks">
            <div id={menuItem}  
                className={ active.includes(menuItem) || active.includes(menuWork) ? 'active works'  : 'works'} 
                data-id='works'>
                    Works
            </div >
            { menu  && children }
        </div>
        <NavLink to='bio'>Bio</NavLink>
        <NavLink to='Contact'>Contact</NavLink>
    </nav>
    )
}