import { useState } from 'react';
import './User-Review.css';

const UserReview = () => {
    const User = {
        userName: "",
        email: "",
        rating: "",
        description: ""
    };

    const [input, setInput] = useState(User);
    const [reviews, setReviews] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        setReviews([...reviews, input]);
        setInput(User);
    };

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput({
            ...input,
            [name]: value
        });
    };

    return (
        <>
            <div className="user-review">
                <h2>User Review</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-field">
                        <label>Username:</label>
                        <input type="text" name="userName" value={input.userName} onChange={handleInput} />
                    </div>

                    <div className="input-field">
                        <label>Email:</label>
                        <input type="text" name="email" value={input.email} onChange={handleInput} />
                    </div>

                    <div className="input-field star-rating">
                    <label>Rating:</label>
                    <div className="stars">{[1, 2, 3, 4, 5].map((num) => (
                        <span key={num} className={`star ${num <= input.rating ? 'filled' : ''}`}
                            onClick={() => setInput({ ...input, rating : num.toString() })}
                        > ★ </span>
                    ))}
                    </div>
                    </div>

                    <div className="input-field">
                        <label>Description:</label>
                        <textarea name="description" value={input.description} onChange={handleInput}/>
                    </div>

                    <button type="submit">Submit</button>
                </form>
                <hr />

                <div className="review-list">
                <h3>Submitted Reviews:</h3>
                {reviews.map((rev, index) => (
                    <div key={index} className="review-card">
                        <h4>{rev.userName}</h4>
                        <h6>{rev.email}</h6>
                        <p>{'★'.repeat(rev.rating)}</p>
                        <p>{rev.description}</p>
                        <div className="review-date">{new Date().toLocaleDateString()}</div>

                    </div>
                ))}
            </div>
            </div>
        </>
    )
}
export default UserReview;