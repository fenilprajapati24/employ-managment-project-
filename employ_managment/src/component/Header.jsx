import { Link } from "react-router-dom";

const Header=()=>{


  return (


          <div className="h-10 w-full bg-blue-950 text-white  p-2 justify-center text-center gap-10 "> 
                  <Link to="/" className="p-2 m-4  hover:bg-yellow-400  rounded-2xl ">home </Link>
                  <Link to="/show" className=" hover:bg-yellow-400  p-2 rounded-2xl"> employ data </Link>
          </div>
  )
}

export default Header; 