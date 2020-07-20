import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import "./UserCard.css";
import Axios from "axios";
const CompCard = (props) => {
  const index=props.index;
  const [valueSelect,setValueSelect]=useState();
  const [cardData,setcardsData]=useState([]);
  const [show, setShow] = useState(false);
  const [height,setHeight]=useState();
  const [baseExperience,setbaseExperience]=useState();
  const [moves,setMoves]=useState();
  const [rank,setRank]=useState();
  const [weight,setWeight]=useState();
  const [abilities,setAbilities]=useState();
  const [name,setName]=useState();
  const [hide,sethide]=useState();
  
  
    
      
    


  useEffect(()=>{
    async function getdata(){
      Axios.get('https://pokeapi.co/api/v2/pokemon/'+props.PokemonId)
      .then(function (response) {
        
        setbaseExperience(response.data.base_experience);
        setHeight(response.data.height);
        setRank(response.data.order);
        setWeight(response.data.weight);
        setMoves(response.data.moves.length);
        setAbilities(response.data.abilities.length);
        setName(response.data.name);
        {props.setcardData({'rank': {rank},'moves': {moves},'height': {height},'baseExperience': {baseExperience},'weight': {weight},'abilities':{abilities}}) }
    })
      .catch(function (error) {
        console.log(error);
      })  
    }
    getdata();  
  })
  

  const url="https://pokeapi.co/api/v2/pokemon-species/?limit=800";
  
  const pokabilurl='https://pokeapi.co/api/v2/pokemon/'+props.PokemonId;

  if (props.show) {
    return (
      <>
        <Card className="main_card">
          <center>
            <Card.Img
              className="img_card"
              variant="top"
              src={props.imgUrl}
              style={{ width: "200px" }}
            />
          </center>
          <Card.Body>
            <Card.Title>
              <center>{name}</center>
            </Card.Title>
            <Card.Text>
              
              Rank:{rank} <br/>
              Base Experience:{baseExperience}<br />
              
              Abilities:{abilities}<br />
              
              Move:{moves}<br />
              
              Weight:{weight}<br />
              
              Height:{height}<br />
              
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  } 
  else{
    return(
      <>
        <Card style={{ backgroundColor: "red" }}>
          <center></center>
          <Card.Body>
            <Card.Text>
              <lottie-player
                src="https://assets6.lottiefiles.com/temp/lf20_Tw0dyZ.json"
                background="transparent"
                speed="0.2"
                style={{ width: "300px", height: "300px" }}
                loop
                autoplay
              ></lottie-player>
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    )
  }
};


export default CompCard;
