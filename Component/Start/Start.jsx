import React, { useEffect, useState } from "react";
import "./Start.css";
import UserCard from "./UserCard/UserCard";
import Footer from "../Footer/Footer";
const Start = () => {
  const [userindex,setIndex]=useState(0);
  const [compindex,setcompIndex]=useState(0);
  const [name, userName] = useState(localStorage.getItem("firstname"));
  const [name2, userName2] = useState(localStorage.getItem("secondname"));
  const [userPokemon, setUserPokemon] = useState([]);
  const [compPokemon, setcompPokemon] = useState([]);
  
  
  
  useEffect(() => {
    for (var i = 0; i < 15; i++) {
      var ranNo = Math.floor(Math.random() * 800);
      setDataUser(ranNo);
    }
    function setDataUser(ranNo) {
      setUserPokemon((prevItem) => {
        return [...prevItem, ranNo];
      });
    }
  },[]);
  useEffect(() => {
    for (var i = 0; i < 15; i++) {
      var ranNo = Math.floor(Math.random() * 800);
      setDataComp(ranNo);
    }

    function setDataComp(ranNo) {
      setcompPokemon((prevItem) => {
        return [...prevItem, ranNo];
      });
    }
  }, []);
  
  
  return (
    <>
      <div className="start_main_div">
        <div className="start_container">
          <div className="container ml-auto mr-auto ">
            <div className="row">
              <div className="col-sm justify-content-center">
                <span className="player_name">{name}</span>
                <UserCard
                  player="user"
                  index={userindex}
                  changeIndex={setIndex} 
                  PokemonId={userPokemon[userindex]}
                  
                  imgUrl={'https://pokeres.bastionbot.org/images/pokemon/'+userPokemon[userindex]+'.png'}
                />
              </div>
              <div className="col-sm ml-auto justify-content-center">
                  
              </div>
              <div className="col-sm ml-auto justify-content-center">
              <span className="player_name">{name2}</span>
              <UserCard
                  player="user"
                  index={compindex}
                  changeIndex={setcompIndex} 
                  PokemonId={compPokemon[compindex]}
        
                  imgUrl={'https://pokeres.bastionbot.org/images/pokemon/'+compPokemon[compindex]+'.png'}
                />
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <footer>
      <Footer/>
      </footer>
    </>
  );
};

export default Start;
