import React from 'react';
import './styles/chatbot.css';
// import chatbot from '../video/chatbot.mp4';
import chatbot from '../../video/chatbot.mp4';

const VideoLayout = () => {
    return (
      <div className="chatbot-container">
        <div className="video-section-chatbot">
          <video  
          autoPlay
           muted
           loop
          playsInline
          disablePictureInPicture
        className="video-player-chat">
            <source src={chatbot} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        <div className="content-section">
          <h2>Content Title</h2>
          <p>
            Your content goes here. 
          </p>
          {/* Add more content as needed */}
        </div>
      </div>
    );
  };

  export default VideoLayout;