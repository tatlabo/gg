import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './tailwind.css'
import './index.css'

import { Root } from './components/root'
import { rootLoader } from './components/loaders.js';

import Layout from './components/layout';

const router = createBrowserRouter([
  { element: <Layout/>, children: [
    {index: true, path:'/', element: <Root/>, loader: rootLoader },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  // </StrictMode>,
    <RouterProvider router={ router }/>
)
