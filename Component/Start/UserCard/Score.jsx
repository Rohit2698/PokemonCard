import React, { useEffect, useState } from "react";
import "./Score.css";
const Score = (props) => {
  const [userWin, setuserWin] = useState(0);
  const [comWin, setCompWin] = useState(0);
  const [get, setget] = useState(true);
  useEffect(() => {}, []);

  function getScore() {
    if (get) {
      switch (props.choosen) {
        case "height":
          if (props.userData.height.height > props.compData.height.height) {
            setuserWin(userWin + 1);
          } else {
            setCompWin(comWin + 1);
          }
          break;
        case "weight":
          if (props.userData.weight.weight > props.compData.weight.weight) {
            setuserWin(userWin + 1);
          } else {
            setCompWin(comWin + 1);
          }
          break;
        case "baseExperience":
          if (
            props.userData.baseExperience.baseExperience >
            props.compData.baseExperience.baseExperience
          ) {
            setuserWin(userWin + 1);
          } else {
            setCompWin(comWin + 1);
          }
          break;
        case "rank":
          if (props.userData.rank.rank > props.compData.rank.rank) {
            setuserWin(userWin + 1);
          } else {
            setCompWin(comWin + 1);
          }
          break;
        case "move":
          if (props.userData.moves.moves > props.compData.moves.moves) {
            setuserWin(userWin + 1);
          } else {
            setCompWin(comWin + 1);
          }
          break;
        case "abilities":
          if (
            props.userData.abilities.abilities >
            props.compData.abilities.abilities
          ) {
            setuserWin(userWin + 1);
          } else {
            setCompWin(comWin + 1);
          }
          break;

        default:
          console.log("nah");
      }
    }
  }

  return (
    <>
      <div className="score_main">
        <button onClick={getScore}>
          <span>Get Score</span>
        </button>
        <br />
        <div className="score_player">
          <span style={{ color: "yellow" }}>U</span>ser:{userWin}
          <br />
          <span style={{ color: "yellow" }}>C</span>omp:- {comWin}
        </div>
      </div>
    </>
  );
};

export default Score;
