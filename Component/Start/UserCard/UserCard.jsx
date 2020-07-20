import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import "./UserCard.css";
import Axios from "axios";
const UserCard = (props) => {
  const index=props.index;
  
  const [show, setShow] = useState(false);
  const [height,setHeight]=useState();
  const [baseExperience,setbaseExperience]=useState();
  const [moves,setMoves]=useState();
  const [rank,setRank]=useState();
  const [weight,setWeight]=useState();
  const [abilities,setAbilities]=useState();
  const [name,setName]=useState();


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
      })
      .catch(function (error) {
        console.log(error);
      })  
    }
    getdata();  
  })
  
  function showCard() {
    setShow(!show);
  }
  function inc(){
    var val=index+1;
    props.changeIndex(val);
  }


  const url="https://pokeapi.co/api/v2/pokemon-species/?limit=800";
  
  const pokabilurl='https://pokeapi.co/api/v2/pokemon/'+props.PokemonId;

  if (show||props.show) {
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
            <Button variant="primary" onClick={inc}>Next Card</Button>
          </Card.Body>
        </Card>
      </>
    );
  } else {
    return (
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
        
        <Button variant="primary" onClick={showCard}>
          Check Out your first Pokemon
        </Button>
      </>
    );
}
};

export default UserCard;
