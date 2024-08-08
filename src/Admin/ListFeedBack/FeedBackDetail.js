import React, { useEffect, useState } from 'react';
import './FeedbackDetail.scss'; // Use your styling
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function FeedbackDetail() {
    const { id } = useParams(); // Get feedback ID from route parameters
    const navigate = useNavigate();

    const [feedback, setFeedback] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showReplyForm, setShowReplyForm] = useState(false);
    const [replyContent, setReplyContent] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        const fetchFeedback = async () => {
            try {
                const result = await axios.get(`http://localhost:5223/api/Feedback/${id}`);
                const feedbackData = result.data.data.result;
                setFeedback(feedbackData);
                setEmail(feedbackData.email);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching feedback details:', err);
                setError('Failed to fetch feedback details');
                setLoading(false);
            }
        };

        fetchFeedback();
    }, [id]);

   
    const handleReplySubmit = async (e) => {
        e.preventDefault();
        const query = new URLSearchParams({
            email: email,
            body: replyContent
        }).toString();
    
        try {
            await axios.post(`http://localhost:5223/api/Feedback/reply-feedback?${query}`);
            alert('Feedback submitted successfully!');
            await axios.delete(`http://localhost:5223/api/Feedback/${id}`);
            navigate('/admin/ListFeedBack');
        } catch (err) {
            console.error('Error submitting reply:', err);
            setError('Failed to submit reply');
        }
    };
    

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="feedback-detail">
            <h1>Feedback Detail</h1>
            {feedback && (
                <div className="detail-content">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <div className="detail-text">{feedback.name}</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <div className="detail-text">{feedback.email}</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone:</label>
                        <div className="detail-text">{feedback.phone}</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Content:</label>
                        <div
                            id="content"
                            className="content-view"
                            dangerouslySetInnerHTML={{ __html: feedback.message }}
                        />
                    </div>
                    <div className="actions">
                        <button onClick={() => navigate('/admin/ListFeedBack')} className="btn">Back to List</button>
                        <button onClick={() => setShowReplyForm(!showReplyForm)} className="btn reply-btn">Reply</button>
                    </div>
                    {showReplyForm && (
                        <div className="reply-form">
                            <h2>Reply to {feedback.name}</h2>

                            <form onSubmit={handleReplySubmit}>
                                <input type="hidden" value={email}
                                    onChange={(e) => setEmail(e.target.value)}  />
                                <textarea
                                    value={replyContent}
                                    onChange={(e) => setReplyContent(e.target.value)}
                                    rows="4"
                                    placeholder="Enter your reply here..."
                                    required
                                />

                                <button type="submit" className="btn submit-btn">Submit Reply</button>
                                <button type="button" onClick={() => setShowReplyForm(false)} className="btn cancel-btn">Cancel</button>
                            </form>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default FeedbackDetail;
