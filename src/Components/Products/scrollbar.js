// import { motion } from 'framer-motion';
// import './scrollbar.css';
// import icon1 from  './icons/icon1.jpeg';


// const images = [
//   { src: {icon1}, text: 'Image 1' },
//   { src: 'icon', text: 'Image 2' },
//   { src: 'icon', text: 'Image 3' },
//   { src: 'icon', text: 'Image 4' },
//   { src: 'icon', text: 'Image 5' },
//   { src: 'icon', text: 'Image 6' },
// ];

// export default function ScrollingContainers() {
//   return (
//     <div className="container-scroll">
//       <motion.div
//         className="scroll-wrapper"
//         animate={{ x: ['100%', '-100%'] }}
//         transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
//       >
//         {[...images, ...images].map((item, index) => (
//           <motion.div
//             key={index}
//             className="scroll-item"
//             whileHover={{ scale: 1.1 }}
//           >
//             <img src={item.src} alt={item.text} className="image" />
//             <div className="overlay">{item.text}</div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// }

import { motion } from 'framer-motion';
import '../../Styles/scrollbar.css';
import icon1 from '../../icons/icon1.jpeg';
import icon2 from   '../../icons/icon2.jpeg';
import icon3 from '../../icons/icon3.jpeg';
import icon4 from '../../icons/icon4.jpeg';
import icon5 from '../../icons/icon5.jpeg';

const images = [
  { src: icon1, text: 'Incubated with Worlds Largest Innovation Campuswith wide opportunity of Global Reach' },
  { src: icon2, text: 'Member of Confederation of Indian Industry' },
  { src: icon3, text: 'Nvidia Inception ProgramPart of an elite group of startups accepted by Nvidiato build our products and make a difference' },
  { src: icon4, text: 'MicrosoftPart of Microsoft Founder’s Hub' },
  { src: icon5, text: 'MEITY Startup HubRecognized by Ministry of Electronicsand Information Technology.' },
  // { src: 'icon', text: 'Image 6' },
];

export default function ScrollingContainers() {
  return (
    <div className="container-scroll">
      <motion.div
        className="scroll-wrapper"
        animate={{ x: ['100%', '-100%'] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
      >
        {[...images, ...images].map((item, index) => (
          <motion.div
            key={index}
            className="scroll-item"
            whileHover={{ scale: 1.1 }}
          >
            <div className="content">
              <img src={item.src} alt={item.text} className="image" />
              <div className="text">{item.text}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

// // task 2
// import React, { useRef, useState } from 'react';
// import './Scrol.css';

// const ScrollingContainers = () => {
//   const containerRef = useRef(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [scrollLeft, setScrollLeft] = useState(0);

//   const data = [ // ... your data
//   ];

//   const handleMouseDown = (e) => {
//     setIsDragging(true);
//     setStartX(e.pageX - containerRef.current.offsetLeft);
//     setScrollLeft(containerRef.current.scrollLeft);
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging) return;
//     const x = e.pageX - containerRef.current.offsetLeft;
//     const walk = (x - startX) * 2; // Adjust scroll speed multiplier
//     containerRef.current.scrollLeft = scrollLeft - walk;
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   const handleMouseLeave = () => {
//     setIsDragging(false);
//   };

//   const handleMouseEnter = (index) => {
//     const containers = document.querySelectorAll('.scroll-item');
//     containers[index].classList.add('hovered'); 
//   };

//   const handleMouseLeaveItem = (index) => {
//     const containers = document.querySelectorAll('.scroll-item');
//     containers[index].classList.remove('hovered'); 
//   };


//   return (
//     <div
//       className="scrolling-container"
//       ref={containerRef}
//       onMouseDown={handleMouseDown}
//       onMouseMove={handleMouseMove}
//       onMouseUp={handleMouseUp}
//       onMouseLeave={handleMouseLeave} // Important: Stop dragging if mouse leaves
//     >
//       {data.map((item, index) => (
//         <div
//           key={index}
//           className="scroll-item"
//           onMouseEnter={() => handleMouseEnter(index)}
//           onMouseLeave={() => handleMouseLeaveItem(index)}
//         >
//           {/* ... image and content */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ScrollingContainers;