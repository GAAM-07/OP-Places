import { Link } from "react-router-dom";
import { DummyAuthor } from "../data/data"; // Importa los datos de DummyAuthor

export default function PostAuthor({ authorId }) {
  // Encuentra el autor por su id
  const author = DummyAuthor.find((author) => author.id === authorId);

  // Verifica que el autor exista antes de renderizar
  if (!author) return null;

  return (
    <Link to={`/posts/user/${author.id}`} className="post-author">
      <div className="post-author-image">
        <img src={author.Image} alt={author.name} />
      </div>
      <div className="post-author-info">
        <h5>{author.name}</h5>
        <small>Just Now</small>
      </div>
    </Link>
  );
}
