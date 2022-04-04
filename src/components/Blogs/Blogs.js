import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs'>
            <h2>What is Context API?</h2>
            <p>Ans:-    Context API is a features in react.js to solved props drilling. In this features we can export a function from anywhere and also can import anywhere in children component. Without this features if we want to use a function on our grand children component. We must need to import that function in every parent component. Now we can directly import and export functions from any component.</p>
            <br /> <br /> <br />


            <h2>What is semantic tag?</h2>
            <p>Ans:-    Semantic tag is basically HTML5 special tag. This tags are build for machine and human both can understand clearly. In semantic tags we can devide every section and specificly define every parts of web page. here is a list of some semantic tag: 
                <ol>
                    <li>header</li>
                    <li>footer</li>
                    <li>nav</li>
                    <li>article</li>
                    <li>aside</li>
                    <li>section</li>
                    <li>main</li>
                </ol>
            </p>
        </div>
    );
};

export default Blogs;