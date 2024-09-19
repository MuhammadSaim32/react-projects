import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from "./components/Home/Home.jsx"
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Route from './Route.jsx'
import About from './components/about.jsx'
import Contact from './components/Contact.jsx'
import User from './components/User.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Route />,
    children: [{
      path: "",
      element: <Home />
    },
    {
      path: "about",
      element: <About />
    },
    {
      path: "contact",
      element: <Contact />
    },
    {
      path: "user/:id",
      element: <User />
    }

    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
