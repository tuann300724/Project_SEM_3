import React, { useEffect, useState } from 'react';
import './ViewDetail.scss';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditNew() {
    const { id } = useParams(); // Get news ID from route parameters
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null); // Handle a single image
    const [imagePreview, setImagePreview] = useState(null); // Preview image URL
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const result = await axios.get(`http://localhost:5288/api/New/${id}`);
                const { title, content, image } = result.data.data;
                setTitle(title);
                setContent(content);
                setImage(image); // Assume image is a URL or null
                setImagePreview(image); // Set image preview URL
                setLoading(false);
            } catch (err) {
                console.error('Error fetching news details:', err);
                setError('Failed to fetch news details');
                setLoading(false);
            }
        };

        fetchNews();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="detail-view">
            <h1>News Detail</h1>
            <div className="detail-content">
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <div className="detail-text">{title}</div>
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    {imagePreview && <img src={imagePreview} alt="Preview" className="image-preview" />}
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <div
                        id="content"
                        className="content-view"
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                </div>
                <div className="actions">
                    <button onClick={() => navigate('/admin/NewAdmin')} className="btn">Back to List</button>
                </div>
            </div>
        </div>
    );
}

export default EditNew;
