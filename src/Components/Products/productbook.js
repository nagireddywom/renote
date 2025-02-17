import { Link } from 'react-router-dom';
import Air from '../../assets/Air.png';
import Classic from '../../assets/Classic.png';
// import mainVideo from './video/main-video.mp4';
// import secondVideo from './video/second-video.mp4';
// import nature from '../../assets//nature.jpeg';
import Eco from   '../../assets/Eco.png';
import Lite from   '../../assets/Lite.png';


// const Products = () => {
//     return (
//         <div className='books-blog-container'>
//             {[
//                 { name: 'AIR', image: Air, path: '/customize/air' },
//                 { name: 'CLASSIC', image: Classic, path: '/customize/classic' },
//                 { name: 'LITE', image: Lite, path: '/customize/lite' },
//                 { name: 'ECO', image: Eco, path: '/customize/eco' }
//             ].map((product, index) => (
//                 <Link to={product.path} key={index} className='product-container'>
//                     <div><h2>{product.name}</h2>
//                     <img src={product.image} alt={product.name} /></div>
                    
//                 </Link>
//             ))}
//         </div>
//     );
// };

// export default Products;

import React from 'react';
// import { Link } from 'react-router-dom';
import '../../Styles/productbook.css';

const Products = () => {
  const products = [
    { name: 'AIR', image: Air, path: '/product/air' },     // Changed path to /product/
    { name: 'CLASSIC', image: Classic, path: '/product/classic' },
    { name: 'LITE', image: Lite, path: '/product/lite' },
    { name: 'ECO', image: Eco, path: '/product/eco' }
  ];

  return (
    <div className="products-grid">
    {products.map((product, index) => (
      <Link 
        key={index}
        to={product.path} 
        className="product-card"
      >
        <div className="image-container">
          <img
            src={product.image}
            alt={product.name}
            className="product-image-2"
          />
          <div className="overlay"></div>
        </div>
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
        </div>
      </Link>
    ))}
  </div>
);
};

export default Products;
