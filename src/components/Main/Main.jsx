/* eslint-disable no-unused-vars */
import React, { useContext, useState, useRef } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input
  } = useContext(Context);

  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && (input || selectedImage)) {
      sendPrompt();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const sendPrompt = () => {
    if (input.trim() !== '' || selectedImage) {
      onSent(input, selectedImage);
      setInput('');
      setSelectedImage(null);
    }
  };

  const handleGalleryClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" className='heroimg' />
      </div>
      <div className="main-container">
        {showResult
          ? <div className="result">
              <div className='result-title'>
                <img src={assets.user_icon} alt="" className='heroimg' />
                <p className='icon'>{recentPrompt}</p>
              </div>
              <div className="result-data">
                <img src={assets.gemini_icon} alt="" />
                {loading
                  ? <div className="loader">
                      <hr className="animated-bg" />
                      <hr className="animated-bg" />
                      <hr className="animated-bg" />
                    </div>
                  : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                }
              </div>
            </div>
          : <>
              <div className="greet">
                <p><span>Hello.</span></p>
                <p>How can I help you today?</p>
              </div>
              <div className="cards">
                <div className="card">
                  <p>Suggest beautiful places to see on an upcoming road trip</p>
                  <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                  <p>Suggest the best parks to visit in a city with descriptions</p>
                  <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                  <p>Brainstorm team bonding activities for our work retreat</p>
                  <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                  <p>Improve the readability of the following code</p>
                  <img src={assets.code_icon} alt="" />
                </div>
              </div>
            </>
        }
        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder='Enter a prompt here'
              onKeyPress={handleKeyPress}
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              ref={fileInputRef}
              style={{ display: 'none' }}
              
            />
            <div>
              <img onClick={handleGalleryClick} src={assets.gallery_icon} width={30} alt=""className='icon' />
              <img src={assets.mic_icon} width={30} alt="" className='icon' />
              {input || selectedImage ? (
                <img onClick={sendPrompt} src={assets.send_icon} width={30} alt="" className='icon' />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main;
