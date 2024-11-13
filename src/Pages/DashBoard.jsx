// Dummy-posts-Data
import { Link } from "react-router-dom";
import { DummyPost } from "../data/data";
import { useState } from "react";

export default function Dashboard() {
  const [posts, setPosts] = useState(DummyPost);

  return (
    <section className="dashboard">
      {posts.length > 0 ? (
        <div className="container dashboard-container">
          {posts.map(({ id, Image, authorId, category, title, des }) => (
            <article key={id} className="dashboard-post">
              <div className="dashboard-post-info">
                <div className="dashboard-post-image">
                  <img src={Image} alt={title} />
                </div>
                <h5>{title}</h5>
              </div>
              <div className="dashboard-posts-action">
                <Link to={`/posts/${authorId}`} className="btn btn-sm">
                  View
                </Link>
                <Link
                  to={`/posts/${authorId}/edit`}
                  className="btn btn-sm btn-primary"
                >
                  Edit
                </Link>
                <Link
                  to={`/posts/${authorId}/delete`}
                  className="btn btn-sm btn-danger"
                >
                  Delete
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <h2 className="error-center">You have not any posts.</h2>
      )}
    </section>
  );
}
