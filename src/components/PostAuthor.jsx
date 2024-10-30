import { Link } from "react-router-dom"
import AuthorImage from "../assets/Img/a2.jpg" 
export default function PostAuthor() {
  return (
    <Link to= {`/posts/user/:id`} className="post-author">
        <div className="post-author-image ">
            <img src={AuthorImage} alt="sexo"/>
        </div>
        <div className="post-author-info">
            <h5>Gustavo Alvarado</h5>
            <small>Just Now</small>
        </div>
    </Link>
  )
}

 