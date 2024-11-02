import { Link } from "react-router-dom";
import { HeadPost } from "../data/data";

export default function Headpost() {
  return (
    <article className="head-post">
      {HeadPost.map(({ Id, Image, authorId, title, des }, index) => (
        <div key={Id || index} className="container head-post-container">
          
          <div className="post-content-head">
            <Link to={`/posts/${authorId}`}>
              <h3>{title}</h3>
            </Link>
            <p>{des}</p>
          </div>
          <div className="post-image ">
            {Image ? (
              <img src={Image} alt={`Imagen del post ${title}`} />
            ) : (
              <p>Imagen no disponible</p> // Mensaje de fallback
            )}
          </div>
        </div>
      ))}
    </article>
  );
}