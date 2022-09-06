import Square from "../components/Square";
interface Props {
    level: Number;
  board: string[];
  handleClick(index: number): void;
}
const Game = (props: Props) => {
  const { level, board, handleClick } = props;
  const styles = {
    board: {
      display: "grid",
      gridTemplateColumns: `repeat(${level}, 1fr)`,
      width: `${level}00px`
    }
  };
  return (
    <div style={styles.board}>
      {board.map((value, index) => (
        <Square
          key={index}
          value={value}
          index={index}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};
export default Game;
