import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

export default function CreatePosts() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Uncategorized');
  const [description, setDescription] = useState('');
  const [thumbImage, setThumbImage] = useState('');

  const postCategories = [
    'Education', 'Discovery', 'Agriculture', 'Entertainment',
    'Music', 'Art', 'Business', 'Investment', 'Fashion', 'Sports', 'Science', 'Weather'
  ];

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '+1' }, { 'indent': '-1' }],
      ['link', 'image'],
      ['clean']
    ]
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];

  return (
    <section className="createPosts">
      <div className="container form-container createPosts-container">
        <h2>Create Posts</h2>
        <form action="" className="form createPosts-form">
          <p className="form-message">This is the invalid message</p>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {postCategories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
          <ReactQuill
            modules={modules}
            formats={formats}
            value={description}
            onChange={(content) => setDescription(content)}
          />
          <input
            type="file"
            onChange={(e) => setThumbImage(e.target.files[0])}
            accept="image/png, image/jpg, image/jpeg"
          />
          <button type="submit" className="btn btn-primary">Update Post</button>
        </form>
      </div>
    </section>
  );
}
