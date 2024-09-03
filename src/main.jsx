import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
// import './tailwind.css'
import './index.css'

import { Root } from './components/root.jsx'
import { rootLoader } from './components/root.jsx';
import { Css } from './components/Tailwind.jsx'
import Works from './components/genre.jsx';
import Work from './components/work.jsx';
import { loader as workLoader } from './components/work.jsx';
import { loader as worksLoader } from './components/genre.jsx';
import { genreLoader } from './components/genre.jsx';
import Layout from './components/layout.jsx';
import { Bio } from './components/bio.jsx'
import { Contact } from './components/contact.jsx';

// const layoutList = { navbarList: ['Works', 'Bio', 'Contact'], worksList: []}

const router = createBrowserRouter([
  { element: <Layout 
      navbarList={['Works', 'Bio', 'Contact']} 
      worksList={['all', 'print', 'sign', 'poster', 'artwork']} />, 
    children: [
      {index: true, path:'/', element: <Root main={true}/>, loader: rootLoader },
      {path: '/css', element: <Css/>},
      {path: '/work/:slug', element: <Work/>, loader: workLoader },
      // {path: '/works', element: <Root main/>, loader: rootLoader },
      {path: '/bio', element: <Bio/>},
      {path: '/contact', element: <Contact/>},

      {path: '/works/:genre', element: <Works main={false}/>, loader: genreLoader },
    ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={ router }/>
  </StrictMode>,
)
