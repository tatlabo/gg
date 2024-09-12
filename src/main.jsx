import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createHashRouter,
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";

import { Root } from './components/root.jsx'
import { rootLoader } from './components/root.jsx';
import Works from './components/genre.jsx';
import Work from './components/work.jsx';
import { loader as workLoader } from './components/work.jsx';

import { genreLoader } from './components/genre.jsx';
import Layout from './components/layout.jsx';
import { Bio } from './components/bio.jsx'
import { Contact } from './components/contact.jsx';
import './index.css'

// const layoutList = { navbarList: ['Works', 'Bio', 'Contact'], worksList: []}

const router = createBrowserRouter([
  { element: <Layout 
      navbarList={['Works', 'Bio', 'Contact']} 
      worksList={['all', 'print', 'sign', 'poster', 'artwork']}/>, 
    children: [
      {index: true, path:'', element: <Root main={true}/>, loader: rootLoader },
      {path: '/work/:slug', element: <Work/>, loader: workLoader },
      // {path: '/works', element: <Root main/>, loader: rootLoader },
      {path: '/bio', element: <Bio/>},
      {path: '/contact', element: <Contact/>},

      {path: '/works/:genre', element: <Works main={false}/>, loader: genreLoader },
    ]
}])




createRoot(document.getElementById('root')).render(
    <RouterProvider router={ router }/>
  // <StrictMode>
  // </StrictMode>,
  // <Bio/>
  // <HashRouter>
  //   <Routes>
  //     <Route path='/' element={<Bio />}>
  //     </Route>
  //   </Routes>
  // </HashRouter>
)
