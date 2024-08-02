import React, { useState } from "react";
import "./AddForm.scss";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function AddNew() {
  const [title, setTitle] = useState("");
  const [images, setImages] = useState([]);
  const [content, setContent] = useState("");

  const handleImageChange = (e) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    } else {
      setImages([]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("Title", title);

    images.forEach((img) => {
      formData.append("formFiles", img);
    });

    formData.append("Content", content);
    formData.append("CategoryId", 1);
    formData.append("CreatedAt", new Date().toISOString());
    formData.append("status", true);
    try {
      const result = await axios.post("http://localhost:5288/api/New", formData, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(result);
      window.location.reload();
    } catch (error) {
      console.error(
        "Error posting data:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="add-form">
      <h1>Add News</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="images">Images</label>
          <input
            type="file"
            id="images"
            name="images"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <CKEditor
            editor={ClassicEditor}
            data={content}
            onChange={(event, editor) => {
              const data = editor.getData();
              setContent(data);
            }}
          />
        </div>
        <div className="actions">
          <button type="submit" className="btn">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNew;
