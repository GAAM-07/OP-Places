import { Link } from 'react-router-dom';
import ProfileImage from '../assets/Img/a1.jpg';
import { FaEdit, FaCheckCircle } from 'react-icons/fa';
import { useState } from 'react';

export default function UserProfile() {
  const [selectedImage, setSelectedImage] = useState(ProfileImage);


  const [profileImage, setProfileImage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const changeInputHandle = (e) => {
 
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'currentPassword':
        setCurrentPassword(value);
        break;
      case 'newPassword':
        setNewPassword(value);
        break;
      case 'confirmPassword':
        setConfirmNewPassword(value);
        break;
      default:
        break;
    }
  };

  const handleImageChange = (event) => {
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <section className="profile">
      <div className="container profile-container">
        <Link to="/myposts/id">My Posts</Link>

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
              <button type="submit" className="profile-image-button">
                <FaCheckCircle />
              </button>
            </form>
          </div>
          <h2>Gustavo Alvarado</h2>
          <form className="form profile-data-form">
              <p className="form-message">This is the invalid message</p>

              <input
                type="text"
                placeholder="Full Name"
                name="name"
                value={name}
                onChange={changeInputHandle}
              />

              <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={changeInputHandle}
              />

              <input
                type="password"
                placeholder="Current password"
                name="currentPassword"
                value={currentPassword}
                onChange={changeInputHandle}
              />

              <input
                type="password"
                placeholder="New password"
                name="newPassword"
                value={newPassword}
                onChange={changeInputHandle}
              />

              <input
                type="password"
                placeholder="Confirm password"
                name="confirmPassword"
                value={confirmNewPassword}
                onChange={changeInputHandle}
              />

              <button type="submit" className="btn btn-primary">
                Update Profile
              </button>
            </form>
        
        </div>
      </div>
    </section>
  );
}
