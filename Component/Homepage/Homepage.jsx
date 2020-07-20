import React,{useState, useEffect} from "react";
import "./Homepage_main_div.css";
import {Link} from 'react-router-dom';
import UserInfo from "../UserInfo/UserInfo";
import Footer from "../Footer/Footer";
import song from './pika.mp3';

const Homepage = () => {
  
  const [modalShow,setModalShow]=useState(false);

    return (
    <>
    <audio autoPlay loop>
      <source src={song} type="audio/mpeg"/>
    </audio>
 
      <div className="container-fluid homepage_main_div">
        <div className="row align-items-center">
          <div className="col-sm ml-auto mr-auto">
            <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
            <div className="video">
              <lottie-player
                src="https://assets1.lottiefiles.com/private_files/lf30_rBOODA.json"
                mode="bounce"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
          <div className="col-sm">
            <div className="start_button">
              <button onClick={() => setModalShow(true)}><span><span>G</span>o On Trainer</span></button>
            </div>
            <UserInfo
                show={modalShow}
                onHide={()=> setModalShow(false)}
            />
            </div>
          </div>
          </div>
          <Footer/>
        </>
  );
};


export default Homepage;
