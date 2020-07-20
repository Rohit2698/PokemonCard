import React, { useState,useEffect } from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import "./UserInfo.css";
import { Link } from "react-router-dom";

const UserInfo = (props) => {
  
  const [firstName,setfirstName]=useState('');
  const [secondName,setsecondName]=useState('');
  const [disable,setdisable]=useState(false);

  useEffect(()=>{
    if(firstName.length===0 || secondName.length===0){
      setdisable(true);
    }else{
      setdisable(false);
    }
  })
  function saveName(e){
  
 if(typeof(Storage)!== "undefined"){
   localStorage.setItem("firstname",firstName);
    localStorage.setItem("secondname",secondName);
  }else{
   }
}

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Hey Trainer How Are You!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm">
                <img
                  src="https://vignette.wikia.nocookie.net/pokemon/images/6/6a/Ash_PJ_2.png/revision/latest/top-crop/width/360/height/360?cb=20191027002145"
                  alt="ash"
                  width="400px"
                  height="400px"
                  className="ash_img"
                />
              </div>
              <div className="col-sm">
                <div className="user_name">
                  <label>Write First Player Name:-</label>
                  <br />
                  <input type="text"  onChange={(e)=>setfirstName(e.target.value)}/>
                </div>
                <div className="user_name">
                  <label>Write Second Player Name:-</label>
                  <br />
                  <input type="text"  onChange={(e)=>setsecondName(e.target.value)}/>
                  <div style={{marginTop:"10px"}}>
                    <Link exact to='/pokestart'><Button onClick={saveName} disabled={disable}>Save</Button></Link>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
  
};


export default UserInfo;
