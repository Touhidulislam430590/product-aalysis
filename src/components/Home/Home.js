import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import useReview from '../hooks/useReview';
import './Home.css';

const Home = () => {
    const [review, setReview] = useReview();

    const reviewCart = review.slice(0, 3);

    // console.log(reviewCart);

    return (
        <div>
            <div className="home-container">                
                <div className="banner">
                    <div className="banner-content">
                        <h2>KTM duke 1290cc</h2>
                        <p>The KTM 1290 Super Duke R is a 1301 cc 75° V-twin engined motorcycle from the Austrian manufacturer KTM. With the update in 2017 the motor is the most powerful LC8 engine ever built by KTM.</p>
                    </div>
                    <div className="banner-img">
                        <img src="images/KTM-1290-Super-Duke.png" alt="KTM-1290-super-bike" />
                    </div>
                </div>
            </div>

            <div className="home-cart">
                {
                    reviewCart.map( view=><Cart key={view.id} view={view}></Cart> )
                }

            </div>

            <div>
                <Link to="/reviews"> <button className='see-more-btn'>See More Reviews</button> </Link>
            </div>


        </div>
    );
};

export default Home;