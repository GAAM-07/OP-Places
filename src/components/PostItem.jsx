import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";

export default function PostItem({ postId, Image, authorId, category, title, des }) {
  const shortTitle = title.length > 30 ? `${title.substring(0, 30)}...` : title;
  const shortDes = des.length > 60 ? `${des.substring(0, 60)}...` : des;

  return (
    <article className="post">
      <div className="post-image">
        <img src={Image} alt="Post visual" />  
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
    </article>
  );
}
