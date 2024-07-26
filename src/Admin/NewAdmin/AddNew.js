import React, { useEffect, useState } from 'react';
import './AddForm.scss';
import axios from 'axios';

function AddNew() {
    const [Title, setTitle] = useState();
    const [Image, setImage] = useState();
    const [Content, setContent] = useState();
   
    const handleImage = (e) =>{
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setImage(file)
        console.log(file);
    }
    useEffect(() => {
        return () => {
          Image && URL.revokeObjectURL(Image.preview);
        };
      }, [Image]);
    const handleSubmit = (e) =>{
        e.preventDefault();
        
        const formData = new FormData();

        formData.append("title", Title);
        formData.append("formFiles", Image);
        formData.append("content", Content);
        formData.append("categoryId", 1);
        
        axios.post("http://localhost:5288/api/new" , formData,
            {
            headers:{
                "Content-Type": "multipart/form-data"
            },
            
        })
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }
    return (
        <div className="add-form">
            <h1>Add News</h1>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
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
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        required
                        onChange={handleImage}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <textarea
                        id="content"
                        name="content"
                        rows="4"
                        required
                        value={Content}
                        onChange={(e) => setContent(e.target.value)}
                     ></textarea>
                </div>
                <div className="actions">
                    <button type="submit" className="btn">Add</button>
                </div>
            </form>
        </div>
    );
}

export default AddNew;
