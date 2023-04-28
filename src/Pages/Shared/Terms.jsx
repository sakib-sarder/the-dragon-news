import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Our Terms and conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, officia neque magni quas officiis molestiae. Quae qui incidunt excepturi beatae. Aliquam dolorum eaque itaque voluptatem mollitia dolores alias quia asperiores vero! Ea sapiente corporis, ullam ut autem deleniti molestiae unde quam perferendis eum cumque laudantium eveniet laborum, maiores quasi voluptatem est quidem! Minus eius perferendis natus velit, quis laboriosam esse officia nisi soluta error quaerat! Ab obcaecati assumenda officia ea labore officiis tempore quis velit? </p>
           <p>go back to <Link to="/register">Register</Link></p> 
        </div>
    );
};

export default Terms;