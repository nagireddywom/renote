// import { useState } from 'react';
// import { useParams, Link, useNavigate } from 'react-router-dom';
// import './productDetail.css';
// import Air from './assets/Air.png';
// import Classic from './assets/Classic.png';
// import mainVideo from './video/main-video.mp4';
// import secondVideo from './video/second-video.mp4';
// import nature from './assets/nature.jpeg';
// import Eco from   './assets/Eco.png';
// import Lite from   './assets/Lite.png';


// const ProductDetail = () => {
//   const { productType } = useParams();
//   const navigate = useNavigate();
//   const [quantity, setQuantity] = useState(1);
//   const [pages, setPages] = useState(50);

//   // Product data mapping
//   const products = {
//     air: {
//       name: 'AIR',
//       image: Air,
//       price: 29.99,
//       description: 'Ultra-lightweight notebook with premium paper quality. Perfect for everyday use with its sleek design and durable construction. Features smooth writing experience and lies flat when open.',
//       features: [
//         'Ultra-lightweight design',
//         'Premium paper quality',
//         'Smooth writing surface',
//         'Durable construction',
//         'Lies flat when open'
//       ],
//       specifications: {
//         weight: '200g',
//         dimensions: '210mm x 297mm',
//         paperWeight: '80gsm'
//       }
//     },
//     classic: {
//       name: 'CLASSIC',
//       image: Classic,
//       price: 34.99,
//       description: 'Traditional notebook with timeless design. Built with high-quality materials and attention to detail. Perfect for professionals and students alike.',
//       features: [
//         'Traditional design',
//         'High-quality materials',
//         'Professional finish',
//         'Multiple color options',
//         'Built to last'
//       ],
//       specifications: {
//         weight: '300g',
//         dimensions: '210mm x 297mm',
//         paperWeight: '100gsm'
//       }
//     },
//     lite: {
//       name: 'LITE',
//       image: Lite,
//       price: 24.99,
//       description: 'Compact and lightweight notebook for on-the-go use. Ideal for quick notes and sketches. Features recyclable materials.',
//       features: [
//         'Compact design',
//         'Lightweight',
//         'Eco-friendly materials',
//         'Perfect for travel',
//         'Quick access'
//       ],
//       specifications: {
//         weight: '150g',
//         dimensions: '148mm x 210mm',
//         paperWeight: '70gsm'
//       }
//     },
//     eco: {
//       name: 'ECO',
//       image: Eco,
//       price: 27.99,
//       description: 'Environmentally conscious notebook made from 100% recycled materials. Sustainable choice without compromising on quality.',
//       features: [
//         '100% recycled materials',
//         'Eco-friendly production',
//         'Sustainable packaging',
//         'Natural finish',
//         'Zero waste'
//       ],
//       specifications: {
//         weight: '250g',
//         dimensions: '210mm x 297mm',
//         paperWeight: '90gsm'
//       }
//     }
//   };

//   const currentProduct = products[productType.toLowerCase()];
  
//   // Get suggested products (excluding current product)
//   const suggestedProducts = Object.entries(products)
//     .filter(([key]) => key !== productType.toLowerCase())
//     .slice(0, 3)
//     .map(([key, product]) => ({ ...product, path: `/product/${key}` }));

//   const handleQuantityChange = (value) => {
//     const newQuantity = Math.max(1, Math.min(99, value));
//     setQuantity(newQuantity);
//   };

//   const handleCustomize = () => {
//     navigate(`/customize/${productType}`, {
//       state: { quantity, pages }
//     });
//   };

//   if (!currentProduct) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div className="product-detail-container">
//       <div className="product-main">
//         <div className="product-left">
//           <div className="product-image-container">
//             <img src={currentProduct.image} alt={currentProduct.name} className="product-image" />
//           </div>
//           <div className="product-price">
//             <h3>Starting from ${currentProduct.price}</h3>
//             <p className="price-note">* Final price may vary based on customization</p>
//           </div>
//         </div>

//         <div className="product-right">
//           <h1>{currentProduct.name}</h1>
//           <p className="product-description">{currentProduct.description}</p>

//           <div className="product-features">
//             <h2>Key Features</h2>
//             <ul>
//               {currentProduct.features.map((feature, index) => (
//                 <li key={index}>{feature}</li>
//               ))}
//             </ul>
//           </div>

//           <div className="product-specifications">
//             <h2>Specifications</h2>
//             <div className="specs-grid">
//               {Object.entries(currentProduct.specifications).map(([key, value]) => (
//                 <div key={key} className="spec-item">
//                   <span className="spec-label">{key}:</span>
//                   <span className="spec-value">{value}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="product-controls">
//             <div className="control-group">
//               <label>Quantity:</label>
//               <div className="quantity-control">
//                 <button onClick={() => handleQuantityChange(quantity - 1)}>-</button>
//                 <input
//                   type="number"
//                   value={quantity}
//                   onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
//                   min="1"
//                   max="99"
//                 />
//                 <button onClick={() => handleQuantityChange(quantity + 1)}>+</button>
//               </div>
//             </div>

//             <div className="control-group">
//               <label>Pages:</label>
//               <select 
//                 value={pages}
//                 onChange={(e) => setPages(parseInt(e.target.value))}
//               >
//                 {[50, 100, 150, 200, 250].map(value => (
//                   <option key={value} value={value}>{value} pages</option>
//                 ))}
//               </select>
//             </div>

//             <button onClick={handleCustomize} className="customize-button">
//               Customize Now
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="suggested-products">
//         <h2>You May Also Like</h2>
//         <div className="suggested-products-grid">
//           {suggestedProducts.map((product, index) => (
//             <Link to={product.path} key={index} className="suggested-product">
//               <img src={product.image} alt={product.name} />
//               <h3>{product.name}</h3>
//               <p>${product.price}</p>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;


// import { useState } from 'react';
// import { useParams, Link, useNavigate } from 'react-router-dom';
// import '../Styles/productDetail.css';
// import Air from '../assets/Air.png';
// import Classic from '../assets/Classic.png';
// import mainVideo from '../video/main-video.mp4';
// import secondVideo from '../video/second-video.mp4';
// import nature from '../assets/nature.jpeg';
// import Eco from '../assets/Eco.png';
// import Lite from '../assets/Lite.png';

// const ProductDetail = () => {
//   const { productType } = useParams();
//   const navigate = useNavigate();
//   const [quantity, setQuantity] = useState(1);
//   const [pages, setPages] = useState(50);

//   // Product data mapping
//   const products = {
//     air: {
//       name: 'AIR',
//       image: Air,
//       price: 29.99,
//       description: 'Ultra-lightweight notebook with premium paper quality. Perfect for everyday use with its sleek design and durable construction. Features smooth writing experience and lies flat when open.',
//       features: [
//         'Ultra-lightweight design',
//         'Premium paper quality',
//         'Smooth writing surface',
//         'Durable construction',
//         'Lies flat when open'
//       ],
//       specifications: {
//         weight: '200g',
//         dimensions: '210mm x 297mm',
//         paperWeight: '80gsm'
//       }
//     },
//     classic: {
//       name: 'CLASSIC',
//       image: Classic,
//       price: 34.99,
//       description: 'Traditional notebook with timeless design. Built with high-quality materials and attention to detail. Perfect for professionals and students alike.',
//       features: [
//         'Traditional design',
//         'High-quality materials',
//         'Professional finish',
//         'Multiple color options',
//         'Built to last'
//       ],
//       specifications: {
//         weight: '300g',
//         dimensions: '210mm x 297mm',
//         paperWeight: '100gsm'
//       }
//     },
//     lite: {
//       name: 'LITE',
//       image: Lite,
//       price: 24.99,
//       description: 'Compact and lightweight notebook for on-the-go use. Ideal for quick notes and sketches. Features recyclable materials.',
//       features: [
//         'Compact design',
//         'Lightweight',
//         'Eco-friendly materials',
//         'Perfect for travel',
//         'Quick access'
//       ],
//       specifications: {
//         weight: '150g',
//         dimensions: '148mm x 210mm',
//         paperWeight: '70gsm'
//       }
//     },
//     eco: {
//       name: 'ECO',
//       image: Eco,
//       price: 27.99,
//       description: 'Environmentally conscious notebook made from 100% recycled materials. Sustainable choice without compromising on quality.',
//       features: [
//         '100% recycled materials',
//         'Eco-friendly production',
//         'Sustainable packaging',
//         'Natural finish',
//         'Zero waste'
//       ],
//       specifications: {
//         weight: '250g',
//         dimensions: '210mm x 297mm',
//         paperWeight: '90gsm'
//       }
//     }
//   };

//   const currentProduct = products[productType.toLowerCase()];
  
//   // Get suggested products (excluding current product)
//   const suggestedProducts = Object.entries(products)
//     .filter(([key]) => key !== productType.toLowerCase())
//     .slice(0, 3)
//     .map(([key, product]) => ({ ...product, path: `/product/${key}` }));

//   const handleQuantityChange = (value) => {
//     const newQuantity = Math.max(1, Math.min(99, value));
//     setQuantity(newQuantity);
//   };

//   const handleCustomize = () => {
//     navigate(`/customize/${productType}`, {
//       state: { quantity, pages }
//     });
//   };

//   // New handler for buying without customization
//   const handleBuyNow = () => {
//     const finalCost = currentProduct.price * quantity;
//     navigate('/checkout/shipping', {
//       state: {
//         product: currentProduct.name,
//         quantity,
//         pages,
//         totalCost: finalCost,
//         isCustomized: false
//       }
//     });
//   };

//   if (!currentProduct) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div className="product-detail-container">
//       <div className="product-main">
//         <div className="product-left">
//           <div className="product-image-container">
//             <img src={currentProduct.image} alt={currentProduct.name} className="product-image" />
//           </div>
//           <div className="product-price">
//             <h3>Starting from ${currentProduct.price}</h3>
//             <p className="price-note">* Final price may vary based on customization</p>
//           </div>
//         </div>

//         <div className="product-right">
//           <h1>{currentProduct.name}</h1>
//           <p className="product-description">{currentProduct.description}</p>

//           <div className="product-features">
//             <h2>Key Features</h2>
//             <ul>
//               {currentProduct.features.map((feature, index) => (
//                 <li key={index}>{feature}</li>
//               ))}
//             </ul>
//           </div>

//           <div className="product-specifications">
//             <h2>Specifications</h2>
//             <div className="specs-grid">
//               {Object.entries(currentProduct.specifications).map(([key, value]) => (
//                 <div key={key} className="spec-item">
//                   <span className="spec-label">{key}:</span>
//                   <span className="spec-value">{value}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="product-controls">
//             <div className="control-group">
//               <label>Quantity:</label>
//               <div className="quantity-control">
//                 <button onClick={() => handleQuantityChange(quantity - 1)}>-</button>
//                 <input
//                   type="number"
//                   value={quantity}
//                   onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
//                   min="1"
//                   max="99"
//                 />
//                 <button onClick={() => handleQuantityChange(quantity + 1)}>+</button>
//               </div>
//             </div>
            
//             {/* <span className={`quantity-price ${priceState}`}>
//     ${calculatePrice().totalPrice} each
//   </span> */}
//             <div className="control-group">
//               <label>Pages:</label>
//               <select 
//                 value={pages}
//                 onChange={(e) => setPages(parseInt(e.target.value))}
//               >
//                 {[50, 100, 150, 200, 250].map(value => (
//                   <option key={value} value={value}>{value} pages</option>
//                 ))}
//               </select>
//             </div>

//             <div className="button-group">
//               <button onClick={handleCustomize} className="customize-button">
//                 Customize Now
//               </button>
//               <button onClick={handleBuyNow} className="buy-now-button">
//                 Buy Without Customization
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="suggested-products">
//         <h2>You May Also Like</h2>
//         <div className="suggested-products-grid">
//           {suggestedProducts.map((product, index) => (
 
//  <Link to={product.path} key={index} className="suggested-product">
//               <img src={product.image} alt={product.name} />
//               <h3>{product.name}</h3>
//               <p>${product.price}</p>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;



import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import '../Styles/productDetail.css';
import Air from '../assets/Air.png';
import Classic from '../assets/Classic.png';
import mainVideo from '../video/main-video.mp4';
import secondVideo from '../video/second-video.mp4';
import nature from '../assets/nature.jpeg';
import Eco from '../assets/Eco.png';
import Lite from '../assets/Lite.png';
import CustomSelect from '../Components/Products/CustomSelect';

const ProductDetail = () => {
  const { productType } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [pages, setPages] = useState(50);
  const [paperType, setPaperType] = useState('Erasable');
  const [bindingType, setBindingType] = useState('spiral');
  const [pageLayout, setPageLayout] = useState('lined');
  const [priceState, setPriceState] = useState('stable');

  // Product data mapping
  const products = {
    air: {
      name: 'AIR',
      image: Air,
      basePrice: 999,
      mrpprice: 2999,
      description: 'ReNote AI Air – AI-Powered Smart Reusable Notebook with Smart Templates & AI Assistance ReNote AI Air is a next-generation AI-powered smart reusable notebook designed for professionals, students, and creatives who want to digitize, organize, and enhance their notes with AI. Featuring 50 reusable, waterproof, and tear-resistant pages, it integrates AI handwriting recognition, smart templates, and cloud sync, making it the ultimate productivity tool.',
      features: [
        'Smart Templates: Pre-designed pages for to-do lists, meeting schedules, and minutes, integrating with popular productivity apps',
        'Versatile Page Layouts: Includes blank, lined, and dotted pages for various uses like sketching, note-taking, and bullet journaling',
        'Reusable & Sustainable: Waterproof, tear-proof paper reusable up to 100 times, erasable with a microfiber cloth and Pilot Frixion pen',
        'AI-Powered OCR: Converts handwriting to digital text with AI assistance',
        'Cloud Integration: Auto-scan and sync with Google Drive, OneDrive, and personal drives',
        'ReNote App: Provides AI summarization, smart search, and other organization tools for digitized notes on Android and iOS'
      ],
      specifications: {
        weight: '200g',
        dimensions: '210mm x 297mm',
        paperWeight: '80gsm'
      }
    },
    classic: {
      name: 'CLASSIC',
      image: Classic,
      basePrice: 999,
      mrpprice: 2999,
      description: 'ReNote AI Air – AI-Powered Smart Reusable Notebook with Smart Templates & AI Assistance ReNote AI Air is a next-generation AI-powered smart reusable notebook designed for professionals, students, and creatives who want to digitize, organize, and enhance their notes with AI. Featuring 50 reusable, waterproof, and tear-resistant pages, it integrates AI handwriting recognition, smart templates, and cloud sync, making it the ultimate productivity tool.',
      features: [
        'Smart Templates: Pre-designed pages for to-do lists, meeting schedules, and minutes, integrating with popular productivity apps',
        'Versatile Page Layouts: Includes blank, lined, and dotted pages for various uses like sketching, note-taking, and bullet journaling',
        'Reusable & Sustainable: Waterproof, tear-proof paper reusable up to 100 times, erasable with a microfiber cloth and Pilot Frixion pen',
        'AI-Powered OCR: Converts handwriting to digital text with AI assistance',
        'Cloud Integration: Auto-scan and sync with Google Drive, OneDrive, and personal drives',
        'ReNote App: Provides AI summarization, smart search, and other organization tools for digitized notes on Android and iOS'
      ],
      specifications: {
        weight: '300g',
        dimensions: '210mm x 297mm',
        paperWeight: '100gsm'
      }
    },
    lite: {
      name: 'LITE',
      image: Lite,
      basePrice:499, 
      mrpprice:999,
      description: 'ReNote AI Air – AI-Powered Smart Reusable Notebook with Smart Templates & AI Assistance ReNote AI Air is a next-generation AI-powered smart reusable notebook designed for professionals, students, and creatives who want to digitize, organize, and enhance their notes with AI. Featuring 50 reusable, waterproof, and tear-resistant pages, it integrates AI handwriting recognition, smart templates, and cloud sync, making it the ultimate productivity tool.',
      features: [
        'Smart Templates: Pre-designed pages for to-do lists, meeting schedules, and minutes, integrating with popular productivity apps',
        'Versatile Page Layouts: Includes blank, lined, and dotted pages for various uses like sketching, note-taking, and bullet journaling',
        'Reusable & Sustainable: Waterproof, tear-proof paper reusable up to 100 times, erasable with a microfiber cloth and Pilot Frixion pen',
        'AI-Powered OCR: Converts handwriting to digital text with AI assistance',
        'Cloud Integration: Auto-scan and sync with Google Drive, OneDrive, and personal drives',
        'ReNote App: Provides AI summarization, smart search, and other organization tools for digitized notes on Android and iOS'
      ],
      specifications: {
        weight: '150g',
        dimensions: '148mm x 210mm',
        paperWeight: '70gsm'
      }
    },
    eco: {
      name: 'ECO',
      image: Eco,
      basePrice: 499,
      mrpprice:999,
      description: 'ReNote AI Air – AI-Powered Smart Reusable Notebook with Smart Templates & AI Assistance ReNote AI Air is a next-generation AI-powered smart reusable notebook designed for professionals, students, and creatives who want to digitize, organize, and enhance their notes with AI. Featuring 50 reusable, waterproof, and tear-resistant pages, it integrates AI handwriting recognition, smart templates, and cloud sync, making it the ultimate productivity tool.',
      features: [
        'Smart Templates: Pre-designed pages for to-do lists, meeting schedules, and minutes, integrating with popular productivity apps',
        'Versatile Page Layouts: Includes blank, lined, and dotted pages for various uses like sketching, note-taking, and bullet journaling',
        'Reusable & Sustainable: Waterproof, tear-proof paper reusable up to 100 times, erasable with a microfiber cloth and Pilot Frixion pen',
        'AI-Powered OCR: Converts handwriting to digital text with AI assistance',
        'Cloud Integration: Auto-scan and sync with Google Drive, OneDrive, and personal drives',
        'ReNote App: Provides AI summarization, smart search, and other organization tools for digitized notes on Android and iOS'
      ],
      specifications: {
        weight: '250g',
        dimensions: '210mm x 297mm',
        paperWeight: '90gsm'
      }
    }
  };

  const PRICING = {
    basePricePerPage: 0.10,
    bindingPrices: {
      spiral: 5,
      glue: 3
    },
    paperPrices: {
      Erasable: 1.2,
      Recycled: 1
    },
    bulkDiscounts: [
      { quantity: 10, discount: 0.05 },
      { quantity: 25, discount: 0.10 },
      { quantity: 50, discount: 0.15 },
      { quantity: 100, discount: 0.20 }
    ]
  };

  const layoutOptions = [
    { value: 'lined', label: 'Lined' },
    { value: 'dot-grid', label: 'Dot Grid' },
    { value: 'blank', label: 'Blank' }
  ];

  const layoutImages = {
    lined: Lite, // Using Lite image as placeholder, replace with actual layout images
    "dot-grid": "/api/placeholder/300/300",
    blank: "/api/placeholder/300/300"
  };

  const paperTypeOptions = [
    { value: 'Erasable', label: 'Erasable' },
    { value: 'Recycled', label: 'Recycled' }
  ];

  const paperImages = {
    Erasable: "/api/placeholder/300/300",
    Recycled: "/api/placeholder/300/300"
  };

  const bindingOptions = [
    { value: 'spiral', label: 'Spiral Bound' },
    { value: 'glue', label: 'Glue Bound' }
  ];

  const bindingImages = {
    spiral: "/api/placeholder/300/300",
    glue: "/api/placeholder/300/300"
  };

  const currentProduct = products[productType.toLowerCase()];
  
  // Get suggested products (excluding current product)
  const suggestedProducts = Object.entries(products)
    .filter(([key]) => key !== productType.toLowerCase())
    .slice(0, 3)
    .map(([key, product]) => ({ ...product, path: `/product/${key}` }));

  const calculatePrice = () => {
    const basePrice = pages * PRICING.basePricePerPage;
    const bindingPrice = PRICING.bindingPrices[bindingType];
    const paperMultiplier = PRICING.paperPrices[paperType];
    const pricePerNotebook = (basePrice + bindingPrice) * paperMultiplier;
    
    const applicableDiscount = PRICING.bulkDiscounts
      .reverse()
      .find(discount => quantity >= discount.quantity);
    
    const discountMultiplier = 1 - (applicableDiscount?.discount || 0);
    const totalPrice = pricePerNotebook * quantity * discountMultiplier;
    
    return {
      pricePerNotebook: pricePerNotebook.toFixed(2),
      totalPrice: totalPrice.toFixed(2),
      discount: applicableDiscount ? (applicableDiscount.discount * 100).toFixed(0) : 0
    };
  };

  const handleQuantityChange = (newQuantity) => {
    const oldPrice = calculatePrice().totalPrice;
    const validQuantity = Math.max(1, Math.min(99, newQuantity));
    setQuantity(validQuantity);
    
    const newPrice = calculatePrice().totalPrice;
    setPriceState(newPrice > oldPrice ? 'price-increase' : 'price-decrease');
    setTimeout(() => setPriceState(''), 500);
  };

  const handleBuyNow = () => {
    const orderDetails = {
      product: currentProduct.name,
      quantity,
      pages,
      paperType,
      bindingType,
      pageLayout,
      totalCost: calculatePrice().totalPrice,
      isCustomized: false
    };
    
    navigate('/checkout/shipping', { state: orderDetails });
  };

  // const handleCustomize = () => {
  //   navigate(`/customize/${productType}`, {
  //     state: {
  //       quantity,
  //       pages,
  //       paperType,
  //       bindingType,
  //       pageLayout
  //     }
  //   });
  // };

  const handleCustomize = () => {
    const orderDetails = {
      productType: productType,
      quantity,
      pages,
      paperType,
      bindingType,
      pageLayout,
      basePrice: currentProduct.basePrice,
      productName: currentProduct.name,
      productImage: currentProduct.image
    };
    
    localStorage.setItem('productDetails', JSON.stringify(orderDetails));
    navigate(`/customize/${productType}`);
  };
  
  if (!currentProduct) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail-container">
      <div className="product-grid">
        <div className="product-left">
          <div className="product-image-container">
            <img 
              src={currentProduct.image} 
              alt={currentProduct.name}
              className="product-image"
            />
          </div>
          <div class="price-container">
  <div class="price-label">Special Price</div>
  <div class="price-row">
    <span class="selling-price">{currentProduct.basePrice}</span>
    <span class="mrp">{currentProduct.mrpprice}</span>
    <span class="discount">30% off</span>
  </div>
  <div class="tax-info">Inclusive of all taxes</div>
</div>
        </div>

        <div className="product-right-side">
          <h1 className="product-title">{currentProduct.name}</h1>
          <p className="product-description">{currentProduct.description}</p>
          <div className="features-container">
            <h2 className="section-title">Key Features</h2>
            <ul className="features-list">
              {currentProduct.features.map((feature, index) => (
                <li key={index} className="feature-item">
                  <span className="feature-bullet">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="options-container">
          <div className="option-group">
          <label className="option-label">Page Layout</label>
          <CustomSelect
            options={layoutOptions}
            value={pageLayout}
            onChange={setPageLayout}
            images={layoutImages}
          />
        </div>

        <div className="option-group">
          <label className="option-label">Paper Type</label>
          <CustomSelect
            options={paperTypeOptions}
            value={paperType}
            onChange={setPaperType}
            images={paperImages}
          />
        </div>

        <div className="option-group">
          <label className="option-label">Binding Type</label>
          <CustomSelect
            options={bindingOptions}
            value={bindingType}
            onChange={setBindingType}
            images={bindingImages}
          />
        </div>

            <div className="option-group">
              <label className="option-label">Pages</label>
              <select
                value={pages}
                onChange={(e) => setPages(Number(e.target.value))}
                className="option-select"
              >
                {[50, 100, 150, 200, 250].map(value => (
                  <option key={value} value={value}>{value} pages</option>
                ))}
              </select>
            </div>

            <div className="option-group">
              <label className="option-label">Quantity</label>
              <div className="quantity-control">
                <button
                  className="quantity-button"
                  onClick={() => handleQuantityChange(quantity - 1)}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => handleQuantityChange(Number(e.target.value))}
                  min="1"
                  max="99"
                  className="quantity-input"
                />
                <button
                  className="quantity-button"
                  onClick={() => handleQuantityChange(quantity + 1)}
                  disabled={quantity >= 99}
                >
                  +
                </button>
                <span className={`price-display ${priceState}`}>
                  RS {calculatePrice().totalPrice}
                </span>
              </div>
            </div>
          </div>
          <div className="bulk-discount-info">
  <h3>Bulk Order Discounts</h3>
  <div className="discount-grid">
    {PRICING.bulkDiscounts.map((discount, index) => (
      <div key={index} className="discount-item">
        <span className="quantity">{discount.quantity}+ notebooks</span>
        <span className="discount-value">{discount.discount * 100}% off</span>
      </div>
    ))}
  </div>
</div>

          <div className="action-buttons">
            <button onClick={handleBuyNow} className="buy-button">
              Buy Now
            </button>
            <button onClick={handleCustomize} className="customize-button">
              Customize Further
            </button>
          </div>

          {/* <div className="features-container">
            <h2 className="section-title">Key Features</h2>
            <ul className="features-list">
              {currentProduct.features.map((feature, index) => (
                <li key={index} className="feature-item">
                  <span className="feature-bullet">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div> */}

          <div className="specifications-container">
            <h2 className="section-title">Specifications</h2>
            <div className="specifications-grid">
              {Object.entries(currentProduct.specifications).map(([key, value]) => (
                <div key={key} className="spec-item">
                  <span className="spec-label">{key}</span>
                  <span className="spec-value">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="suggested-products">
        <h2 className="section-title">You May Also Like</h2>
        <div className="suggested-products-grid">
          {suggestedProducts.map((product, index) => (
            <Link to={product.path} key={index} className="suggested-product">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              {/* <p>RS {product.basePrice}</p> */}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;