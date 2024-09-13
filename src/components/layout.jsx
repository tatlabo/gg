import { Children, useEffect, useRef, useState } from "react"
import { Outlet } from "react-router-dom"
import { NavLink, Link, useParams, useLocation } from "react-router-dom"



export default function Layout({ navbarList, worksList }) {

    const [theme, setTheme] = useState( localStorage?.getItem('theme') || 'normal' ) 
    const themes = ['normal', 'light', 'dark']

    const switchTheme = () =>  {
        setTheme( prev =>  themes[ (themes.indexOf(prev) + 1 ) % themes.length ]  )
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
    const location = useLocation()
    const active = location.pathname.slice(1).split('/')
    const [menu, setMenu] = useState(false)

    const rotate = ["rotate-0", "rotate-120", "rotate-240"]
    const themes = ['normal', 'light', 'dark']

    let sun = <svg width="20px" height="20px" viewBox="0 0 16 16">
        <path d="M14.7,8c0-3.7-3-6.7-6.7-6.7c-3.7,0-6.7,3-6.7,6.7c0,3.7,3,6.7,6.7,6.7C11.7,14.7,14.7,11.7,14.7,8z M8,13.7
	c-3.1,0-5.7-2.5-5.7-5.7c0-3.1,2.5-5.7,5.7-5.7L8,8l4.9,2.8C11.9,12.5,10.1,13.7,8,13.7z"/>
    </svg>

    let moon = sun

    const menuItem = 'works'
    const menuWork = 'work'

    console.log(theme)
    console.log(location.pathname)
    
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
        <button className={ `theme-switcher theme-${theme}`} onClick={switchTheme}>{sun}</button>
    </nav>
    )
}