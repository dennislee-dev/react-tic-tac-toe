import React, { useState } from "react";
interface Props {
  handleStart(players: string[], gameLevel: Number): void;
}
const Start = (props: Props) => {
  const { handleStart } = props;
  const [players, setPlayers] = useState(["Player 1", "Player 2"]);

  const style = {
    title: {
      marginBottom: "70px",
      fontSize: "50px",
      lineHeight: "1",
    },
    button: {
      fontSize: "20px",
      lineHeight: "1",
      fontWeight: "700",
      padding: "10px 21px",
      border: "none",
      background: "rgb(46, 125, 50)",
      color: "white",
      borderRadius: "10px",
    },
    buttonWrapper: {
        display: "flex",
        justifyContent: "center",
        gap: "20px"
    }
  };

  const handleClick = (level: Number) => {
    handleStart(players, level);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={style.title}>Tic Tac Toe</h1>
      <div style={style.buttonWrapper}>
        <button style={style.button} onClick={() => handleClick(3)}>
          Easy
        </button>
        <button style={style.button} onClick={() => handleClick(4)}>
          Normal
        </button>
        <button style={style.button} onClick={() => handleClick(5)}>
          Hard
        </button>
      </div>
    </div>
  );
};
export default Start;
