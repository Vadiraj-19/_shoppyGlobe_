import { Link } from "react-router-dom"
import { useRouteError } from "react-router-dom"

const NotFound = () => {
  const error = useRouteError()
  
  return (
    <div className="font-poppins flex flex-col w-screen h-screen justify-center items-center text-4xl">
     <h1>{error.data}</h1>
     <h2 className="font-bold"><span className="text-red-600">{error.status}</span> {error.statusText}</h2>
     <Link to="/">
     <button  className="px-4 py-2 rounded-lg m-4  active:bg-sky-600 active:text-white  bg-gray-200 text-black"> <i className="fa-solid fa-arrow-left"></i> Home </button>
     </Link>
     
    </div>
   
  )
}

export default NotFound