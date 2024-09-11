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
    // const sun = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sun-fill" viewBox="0 0 16 16">
    //     <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
    //     </svg>
    // const moon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
    //     <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
    //     </svg>


    let moon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-post" viewBox="0 0 16 16">
    <path d="M4 3.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5z"/>
    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1"/>
  </svg>

    let sun = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-post" viewBox="0 0 16 16">
    <path d="M4 3.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5z"/>
    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1"/>
  </svg>

    moon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightbulb" viewBox="0 0 16 16">
    <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1"/>
  </svg>

   sun = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightbulb-fill" viewBox="0 0 16 16">
  <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5"/>
</svg>


    sun = <svg width="16px" height="16px" viewBox="0 0 24 24">
        <path d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,20.5 L12,3.5 C16.6944204,3.5 20.5,7.30557963 20.5,12 C20.5,16.6944204 16.6944204,20.5 12,20.5 Z" id="🎨-Color">
        </path>
    </svg>

    moon = sun

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