import React from 'react';
import './Footer.css';
const Footer=()=>{
    return(
            <>
            <div className="container-fluid footer">
                <div>
                    <span className="copyright">&#xa9; Copyright Rohit_Thakur</span><br/><br/>
                    <div>
                    <ul className="logos">
                    <li><a href="https://github.com/Rohit2698/CoronaFight" target="_blank"><i class="fa fa-github" style={{fontSize:"24px"}}></i></a></li>
                    <li><a href="https://www.linkedin.com/in/rohit-thakur-535769185/" target="_blank"><i class="fa fa-linkedin-square" style={{fontSize:"24px"}}></i></a></li>
                    <li><a href="https://www.instagram.com/rohitthakur09/" target="_blank"><i class="fa fa-instagram" style={{fontSize:"24px"}}></i></a></li>
                    </ul>
                    </div>
                </div>
                
            </div>
            </>
    )
}

export default Footer;