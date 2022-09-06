import Game from "./pages/Game";
import Start from "./pages/Start";
import Finished from "./pages/Finished";
import useTickTackToe from "./hooks/useTicTacToe";
const App = () => {
  const game = useTickTackToe();
  const style = {
    app: {
      width: "70%",
      height: "100vh",
      margin: "auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };
  return (
    <div style={style.app}>
      {game.status === "created" && <Start handleStart={game.handleStart} />}
      {game.status === "finished" && (
        <Finished name={game.winner} restart={game.handleRestart} />
      )}
      {game.status === "started" && (
        <Game board={game.board} level={game.level} handleClick={game.handleClick} />
      )}
    </div>
  );
};
export default App;
