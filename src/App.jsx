import Home from "./Pages/Home"
import About from "./Pages/About"
import ContactLayout from './Layout/ContactLayout'
import './styles/main.scss'
import {  Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router"
import RootLayout from "./Layout/RootLayout"
import ContactInfo from "./Components/ContactInfo"
import ContactForm from "./Components/ContactForm"
import NotFound from "./Components/NotFound"
import Skills from "./Pages/Skills"
import Error from "./Components/Error"


const App = () => {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />} >
           <Route index  element={<Home/> }  />
           <Route path='about'  element={<About/> }  />
           
           <Route path="skills" element={<Skills />} errorElement={<Error />} />
            
           <Route path='contact'  element={<ContactLayout/> } >
              <Route path='info' element={<ContactInfo />} />
              <Route path='form' element={<ContactForm />} />
           </Route>
           <Route path='*' element={<NotFound/>} />
      </Route>
    ))

  return (
    <RouterProvider  router={router} />
         
  )
}

export default App