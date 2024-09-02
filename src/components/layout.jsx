import { Children, useEffect, useRef, useState } from "react"
import { Outlet } from "react-router-dom"
import { NavLink, Link } from "react-router-dom"


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

    const menuDrop = useRef(0)
    const intervalRef = useRef(0)
    console.log(intervalRef)
    console.log(menuDrop.current)
    // const updateMenu = () => {
    //     setMenuDsplay( prev => prev = !prev )
    // }

    // useEffect(() => document.addEventListener("click", (event) => {
    //     console.log(event.target.id)
    //     if(event.target.id === "works") {
    //         setMenuDsplay((prev) => prev = !prev)
    //     }
    // }))

    const logoImg ='https://gosiagajewska.com/wpgg/wp-content/uploads/2021/09/Logo-Gosia-Gajewska_new_scalone_yellow_172.png'
    
    return (
    <nav  id="dropdown">
        <Link to='/' className="logo"><img src={logoImg} className="logo"/></Link>

        <div className="menuWorks">
            <Link to='#' id='works'>Works</Link >
            { menuDrop.current  && children }
        </div>

        <NavLink to='bio'>Bio</NavLink>
        <NavLink to='Contact'>Contact</NavLink>
    </nav>
    )
}