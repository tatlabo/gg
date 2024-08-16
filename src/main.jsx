import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './tailwind.css'
// import './index.css'

import { Root } from './components/Root.jsx'
import { rootLoader } from './components/loaders.js';
import { Css } from './components/Tailwind.jsx'
import Layout from './components/Layout.jsx';

const router = createBrowserRouter([
  { element: <Layout/>, children: [
    {index: true, path:'/', element: <Root/>, loader: rootLoader },
    {path: '/css', element: <Css/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  // </StrictMode>,
    <RouterProvider router={ router }/>
)
