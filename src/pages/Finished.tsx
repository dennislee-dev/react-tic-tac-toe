interface Props {
  name: string | null;
  restart(): void;
}
const Finished = (props: Props) => {
  const { name, restart } = props;
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
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={style.title}>
        {name && `${name} won the game`}
        {!name && "It's a tie "}
      </h1>
      <button style={style.button} onClick={restart}>
        Restart
      </button>
    </div>
  );
};
export default Finished;
