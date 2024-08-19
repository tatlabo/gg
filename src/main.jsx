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
import Layout from './components/layout.jsx';
import { loader as worksLoader } from './components/work.jsx';

const navbarList = ['Works', 'Bio', 'Contact']

const router = createBrowserRouter([
  { element: <Layout props={ navbarList }/>, children: [
    {index: true, path:'/', element: <Root/>, loader: rootLoader },
    {path: '/css', element: <Css/>},
    {path: '/work/:workSlug', element: <Work/>, loader: worksLoader },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  // </StrictMode>,
    <RouterProvider router={ router }/>
)
