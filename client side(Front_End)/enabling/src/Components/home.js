// import React from "react";
import './home.css';
import React, { useEffect, useRef } from 'react';


function HomePage () {
    const videoRef = useRef(null);

    useEffect(() => {
      const videoElement = videoRef.current;
  
      const playVideo = () => {
        videoElement.play().catch(error => {
    
          console.log('Video play error:', error);
        });
      };
  
      const restartVideo = () => {
        videoElement.currentTime = 0;
        playVideo();
      };
  
      videoElement.addEventListener('ended', restartVideo);
  
      playVideo();
  
      return () => {
        videoElement.removeEventListener('ended', restartVideo);
      };
    }, []);
    return (
        <div>
            <nav className="navbar">
                <div className="leftDepart">
                    <img className="logo" src="resources/logo.jpg" alt="no image "></img>
                </div>
                <div className="rightDepart">
                    <input type="text" placeholder="Search..." className="searchbar" ></input>
                </div>
                <div className="lastDepart">
                    <img src="resources/search.png" alt=""></img>
                    <img className='search' src="resources/search.jpg" alt="no image"></img>  
                </div> 
                <div className="spanAligin">
                    <span>MyCourse</span>
                    <span>Marathon</span>
                    <div className="container">
                        <div className="leftSpan"><span>About</span></div>
                        <div className="rightImg"><img className="pinkheart" src="resources/pinkheart.jpg"></img></div>
                    </div>
                    <div className="depart">
                        <div className="spansign"><span>SignUp</span></div>
                        <div className="imgsign"><img className="signupLogo" src="resources/signup.png" alt=""></img></div>
                    </div>
                </div>  
            </nav>
            <div className="slideContainer">
                <img className="slideimg" src="resources/slideimg.jpg" alt=""></img>
            </div><br/>
            <div className='cardDepart'>
                <div className='cardOne'>
                    <video className='videOne' ref={videoRef} controls>
                        <source  src='resources/stich.mp4'></source>
                    </video>
                    </div>
            </div>
            <div className='cardDepart'>
                <div className='cardOne aligin'>
                    <video className='videOne' ref={videoRef} controls>
                        <source  src='resources/stich.mp4'></source>
                    </video>
                    </div>
            </div>
            <div className='cardDepart'>
                <div className='cardOne'>
                    <video className='videOne' ref={videoRef} controls>
                        <source  src='resources/stich.mp4'></source>
                    </video>
                    </div>
            </div>
            
            <div className='cardDepart'>
                <div className='cardOne aligin'>
                    <video className='videOne' ref={videoRef} controls>
                        <source  src='resources/stich.mp4'></source>
                    </video>
                    </div>
            </div>
          

        </div>
    );
}

export default HomePage;