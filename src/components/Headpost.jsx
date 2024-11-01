
import { Link } from "react-router-dom"
import Headpost from "../data/data"
export default function Headpost() {
  return (
    <article className="head-post">
      {
        HeadPost.map(({Id , Image, authorId, title , des  }, index )=>
            {return(
                <div className="">
                    <div className="post-image">
        <img src={HeadpostImage} alt="Post visual" />  
      </div>
      <div className="post-content">
        <Link to={`/posts/${postId}`}>
          <h3>{shortTitle}</h3>
        </Link>
        <p>{shortDes}</p>
        <div className="post-footer">
          <PostAuthor authorId={authorId} /> {/* Asegúrate de pasar authorId si es necesario */}
          <Link to={`/posts/categories/${category}`} className="btn btn-category">
            {category}
          </Link>
        </div>
      </div>
                </div>

            )
        })


      }
      
    </article>
  )
}
