import React from 'react';
import Cart from '../Cart/Cart';
import useReview from '../hooks/useReview';
import './Reviews.css';

const Reviews = () => {
    const [review, setReview] = useReview();

    return (
        <div className='review-container'>
            {
                review.map( view=><Cart key={view.id} view={view}></Cart> )
            }
        </div>
    );
};

export default Reviews;