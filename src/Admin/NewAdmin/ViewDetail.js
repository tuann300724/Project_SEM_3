import React, { useEffect, useState } from 'react';
import './ViewDetail.scss';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function EditNew() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        id: '',
        title: '',
        content: '',
        status: true,
        createdAt: new Date().toISOString().slice(0, 16),
        categoryId: 1
    });
    const [imagePreview, setImagePreview] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const result = await axios.get(`http://localhost:5288/api/New/${id}`);
                const { title, content, image } = result.data.data;
                setFormData(prevData => ({
                    ...prevData,
                    id,
                    title,
                    content,
                    status: true,
                    createdAt: new Date().toISOString().slice(0, 16),
                    categoryId: 1
                }));
                setImagePreview(image);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching news details:', err);
                setError('Failed to fetch news details');
                setLoading(false);
            }
        };

        fetchNews();
    }, [id]);

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    function handleFileChange(event) {
        const file = event.target.files[0];
        setSelectedFile(file);

        if (file) {
            const previewUrl = URL.createObjectURL(file);
            setImagePreview(previewUrl);
        }
    }
    function handleCKEditorChange(event, editor) {
        const data = editor.getData();
        setFormData(prevData => ({
            ...prevData,
            content: data
        }));
    }
    console.log(selectedFile);
    async function handleSubmit(event) {
        event.preventDefault();

        if (!formData.id || !formData.title || !formData.content) {
            alert('Please fill in all required fields.');
            return;
        }

        const formDataToSend = new FormData();
        formDataToSend.append('id', formData.id);
        formDataToSend.append('title', formData.title);
        formDataToSend.append('content', formData.content);
        formDataToSend.append('status', formData.status);
        formDataToSend.append('createdAt', formData.createdAt);
        formDataToSend.append('categoryId', formData.categoryId);

        if (selectedFile) {
            formDataToSend.append('formFiles', selectedFile);
        }

        try {
            const response = await axios.put(`http://localhost:5288/api/New/${formData.id}`, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log("Update response:", response.data);
            alert('News updated successfully!');

            setFormData({
                id: '',
                title: '',
                content: '',
                status: true,   
                createdAt: new Date().toISOString().slice(0, 16),
                categoryId: 1
            });
            setSelectedFile(null);
            setImagePreview(null);
            navigate("/admin/NewAdmin")
        } catch (err) {
            console.error("Error updating news:", err.response ? err.response.data : err.message);
            setError("Failed to update news. Please try again.");
        }
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="detail-view">
            <h1>Edit News</h1>
            <form onSubmit={handleSubmit}>
                <div className="detail-content">
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            id="title"
                            name="title"
                            className="detail-text"
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image</label>
                        <input
                            type="file"
                            name="image"
                            onChange={handleFileChange}
                        />
                        {imagePreview && <img src={imagePreview} alt="Preview" className="image-preview" />}
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Content</label>
                        <CKEditor
                            editor={ClassicEditor}
                            id="content"
                            name="content"
                            className="content-view"
                            data={formData.content}
                            onChange={handleCKEditorChange}
                        />
                    </div>
                    <input type="hidden" name="status" value={formData.status} />
                    <input type="hidden" name="createdAt" value={formData.createdAt} />
                    <div className="actions">
                        <button type="button" onClick={() => navigate('/admin/NewAdmin')} className="btn">Back to List</button>
                        <button className="btn" type="submit">Update News</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default EditNew;
