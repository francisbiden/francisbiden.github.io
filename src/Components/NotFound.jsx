import { useNavigate } from "react-router"

const NotFound = () => {

    const navigate = useNavigate()
  return (
    <div>
        <h2>404 | page not found</h2>
        <br />
        <button onClick={()=>navigate('/')}>Go to Home</button>
    </div>
  )
}

export default NotFound