import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
// import './tailwind.css'
import './index.css'

import { Root } from './components/root.jsx'
import { rootLoader } from './components/loaders.js';
import { Css } from './components/Tailwind.jsx'
import { Article } from './components/article.jsx';
import Work from './components/work.jsx';
import { loader as workLoader } from './components/work.jsx';
import Works from './components/works.jsx';
import { loader as worksLoader } from './components/work.jsx';
import Layout from './components/layout.jsx';
import { Bio } from './components/bio.jsx'
import { Contact } from './components/contact.jsx';

const navbarList = ['Works', 'Bio', 'Contact']

const router = createBrowserRouter([
  { element: <Layout props={ navbarList }/>, children: [
    {index: true, path:'/', element: <Root/>, loader: rootLoader },
    {path: '/css', element: <Css/>},
    {path: '/work/:workSlug', element: <Work/>, loader: workLoader },
    {path: '/works', element: <Root/>, loader: rootLoader },
    {path: '/bio', element: <Bio/>},
    {path: '/contact', element: <Contact/>},
  ]
}])

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  // </StrictMode>,
    <RouterProvider router={ router }/>
)
