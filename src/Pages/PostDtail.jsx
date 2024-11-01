import { Link } from 'react-router-dom';
// Component
import PostAuthor from '../components/PostAuthor';

import postDtailImage from "../assets/Img/1.jpg"
export default function PostDetail() {
  return (
    <section>
      <div className="container PostDetail-container">
        <div className="postdetail-top">
          <PostAuthor />
          <div className="postdetail-buttons">
            <Link to="/posts/werwer/edit" className="btn btn-sm btn-primary">
              Edit
            </Link>
            <Link to="/posts/werwer/delete" className="btn btn-sm btn-danger">
              Delete
            </Link>
          </div>
        </div>
        <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, molestias.</h1>
        
        {/* Agregamos la imagen y el párrafo aquí */}
        <div className="postdtail-image">
          <img src={postDtailImage} alt="" />
        </div>
        <div className='postdtail-para'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, eos deleniti! Ratione facilis qui magni alias consequatur laudantium, deserunt molestiae explicabo quisquam. Voluptas ratione reiciendis eligendi omnis alias dolore minima?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sequi repudiandae eveniet aspernatur dolorem nulla veniam sapiente a dignissimos, quidem itaque recusandae laboriosam nemo doloremque odio cumque minus maxime corrupti?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti quo laborum odit, consequatur error at illo culpa excepturi deserunt officia aliquam, dolorum eius sed eveniet voluptate, unde sapiente? Similique, sed?
          </p>
          {/* otros párrafos */}
        </div>
      </div>
    </section>
  );
}
