import React from 'react';
import Cart from '../Cart/Cart';
import useReview from '../hooks/useReview';
import './Reviews.css';

const Reviews = () => {
    const [review, setReview] = useReview();

    return (
        <div>
            <h2 className='review-heading'>People says about KTM duke 1290</h2>
            <div className='review-container'>
                {
                    review.map( view=><Cart key={view.id} view={view}></Cart> )
                }
            </div>
        </div>
    );
};

export default Reviews;