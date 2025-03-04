import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
    <div>
         <Navbar />
         <Outlet />
    </div>
  )
}

export default RootLayout