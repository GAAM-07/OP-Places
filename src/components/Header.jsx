import { Link } from "react-router-dom"
import { AiOutlineBars } from "react-icons/ai";
import { MdClose } from "react-icons/md";
function Header() {
  return (
    <nav>
        <div className="container nav-container">
           <Link className="nav-logo" to={"/"} >
           <h3><span>O</span>P  <span>P</span>laces<span> B</span>log </h3>
           </Link>
           <ul className="nav-menu">
            <li><Link to={"/profile/id"}> User </Link> </li>
            <li><Link to={"/create"}> Create Post </Link> </li>
            <li><Link to={"/authors"}> Authors </Link> </li>
            <li><Link to={"/logout"}> Logout </Link> </li>
            
           </ul>
           <button className="nav-toggle-button ">
           <AiOutlineBars/>
           <MdClose/>
           </button>
       
        </div>


    </nav>
  )
}

export default Header