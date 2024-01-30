// LikeButton.js
import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import './App.css';

const LikeButton = () => {
    const [likeCount, setLikeCount] = useState(0);

    const handleLikeClick = () => {
        setLikeCount(likeCount + 1);
    };

    return (
        <div className="like-button-container">
            <button className="like-button text-center items-center justify-center flex" onClick={handleLikeClick}>
                <FaHeart />
            <p className="like-count">{likeCount}</p>
            </button>
        </div>
    );
};

export default LikeButton;
