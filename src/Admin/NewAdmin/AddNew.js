import React, { useState } from "react";
import "./AddForm.scss";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function AddNew() {
  const [Title, setTitle] = useState("");
  const [Image, setImage] = useState("");
  const [Content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: Title,
      image: Image,
      content: Content,
      categoryId: 1,
    };

    axios
      .post("http://localhost:5288/api/New", data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((result) => console.log(result))
      .catch((error) =>
        console.error(
          "Error posting data:",
          error.response ? error.response.data : error.message
        )
      );
  };

  return (
    <div className="add-form">
      <h1>Add News</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Title</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={Title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            type="text"
            id="image"
            name="image"
            accept="image/*"
            required
            value={Image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <CKEditor
            editor={ClassicEditor}
            data={Content}
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
