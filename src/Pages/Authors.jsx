import { Link } from "react-router-dom";
import { DummyAuthor } from "../data/data";
import { useState } from "react";
export default function Authors() {
  const [authors, setAuthor] = useState(DummyAuthor);

  return (
    <section className="author">
      <div className="container author-container">
        {authors.length > 0 ? (
          <div className="container author-container">
            {authors.map(({ id, Image, name, posts }, index) => {
              return (
                <Link to={`/posts/user/${id}`} key={index} className="author-avatar">
                  <div className="author-image">
                    <img src={Image} alt="" />
                  </div>
                    <div className="author-info">
                    <h4>{name}</h4>
                    <p>{posts}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
        
          <h2 className="error-center">Not User Found.</h2>
        )}
      </div>
    </section>
  );
}