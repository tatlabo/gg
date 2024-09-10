import { Children, useEffect, useRef, useState } from "react"
import { Outlet } from "react-router-dom"
import { NavLink, Link, useParams, useLocation } from "react-router-dom"



export default function Layout({ navbarList, worksList }) {

    const [theme, setTheme] = useState( localStorage?.getItem('theme') || 'light' ) 

    const switchTheme = () =>  {
        setTheme( prev => prev === 'light' ? 'dark' : 'light')
    }
    
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])
    
    localStorage.setItem('theme', `${theme}`)
    
    return (<>
        <Navbar navbarList={navbarList} worksList={worksList} switchTheme={switchTheme} theme={theme}>
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

function Navbar({ children, switchTheme, theme }) {

    const logoImg ='https://gosiagajewska.com/wpgg/wp-content/uploads/2021/09/Logo-Gosia-Gajewska_new_scalone_yellow_172.png'
    const loaction = useLocation()
    const active = location.pathname.slice(1).split('/')
    const [menu, setMenu] = useState(false)
    const sun = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sun-fill" viewBox="0 0 16 16">
        <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
        </svg>
    const moon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
        <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
        </svg>

    const menuItem = 'works'
    const menuWork = 'work'

    console.log(theme)
    
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
    <nav id="dropdown">
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
        <button className={theme === 'light' ? `theme-switcher moon` : `theme-switcher sun`} onClick={switchTheme}>{ theme === 'light' ? moon : sun }</button>
    </nav>
    )
}