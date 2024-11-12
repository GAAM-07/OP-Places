import { Link } from 'react-router-dom';
import ProfileImage from '../assets/Img/a1.jpg';
import { FaEdit } from 'react-icons/fa';
import { useState } from 'react';
import {FaCheckCircle} from "react-icons/fa"
export default function UserProfile() {
  const [selectedImage, setSelectedImage] = useState(ProfileImage);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  return (
    <section className="profile">
      <div className="container profile-container">
        <Link to={"/myposts/id"}>My Posts</Link>
        <div className="profile-details">
          <div className="profile-wrapper">
            <div className="profile-image">
              <img src={selectedImage} alt="Imagen de perfil" />
            </div>
            <form className="profile-image-form">
              <input
                type="file"
                name="profile-image"
                id="profile-image"
                accept="image/*"
                onChange={handleImageChange}
              />
              <label htmlFor="profile-image">
                <FaEdit />
                Change Image
              </label>
              <button type="submit" className="profile-image-button">
                Save Changes <FaCheckCircle />
              </button>
            </form>
          </div>
        </div>
        <h2>Gustavo Alvarado</h2>
      </div>
    </section>
  );
}