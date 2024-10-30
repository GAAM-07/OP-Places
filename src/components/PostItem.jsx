import { Link } from "react-router-dom"
import PostAuthor from "./PostAuthor"
export default function PostItem({postId , Image, authorId, category, title, des }) {
  return (
   <article className="post">
    <div className="post-image">
      <img src= {Image} alt="waos waso" />  
    </div>
    <div className="post-content">
    <Link to={`/posts/${postId}`}>
    <h3>{title}</h3>
    </Link>
    <p>{des}</p>
    <div className="post-footer">
      <PostAuthor/>
      <Link to={`/posts/categories/${category}`} className="btn btn-category"> {category} </Link>
    </div>


    </div>
   </article>
  )
}

