import { useState, useEffect } from "react";
interface ReturnValue {
  level: Number;
  board: string[];
  status: string;
  winner: string | null;
  handleClick: (index: number) => void;
  handleRestart: () => void;
  handleStart: (players: string[], gameLevel: Number) => void;
}
export default (): ReturnValue => {
  const [level, setLevel] = useState<Number>(3);
  const [board, setBoard] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState<string | null>(null);
  const [status, setStatus] = useState("created");
  const [players, setPlayers] = useState(["", ""]);

  useEffect(() => {
    if (status !== "started") return;
    const winningPositions3 = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    const winningPositions4 = [
      [0, 1, 2, 3],
      [4, 5, 6, 7],
      [8, 9, 10, 11],
      [12, 13, 14, 15],
      [0, 4, 8, 12],
      [1, 5, 9, 13],
      [2, 6, 10, 14],
      [3, 7, 11, 15],
      [0, 5, 10, 15],
      [3, 6, 9, 12],
    ];
    const winningPositions5 = [
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19],
      [20, 21, 22, 23, 24],
      [0, 5, 10, 15, 20],
      [1, 6, 11, 16, 21],
      [2, 7, 12, 17, 22],
      [3, 8, 13, 18, 13],
      [4, 9, 14, 19, 14],
      [0, 6, 12, 18, 24],
      [4, 8, 12, 16, 20],
    ];
    const winningPositions = level === 3 ? winningPositions3 : level === 4 ? winningPositions4 : winningPositions5;
    let winningPositionsIndex = 0;
    let winner: string | null = null;
    while (winningPositionsIndex < winningPositions.length && !winner) {
      const boardPositionsToCheck = winningPositions[winningPositionsIndex];
      const boardValuesToCkeck = boardPositionsToCheck.map(
        (index) => board[index]
      );
      const checkingValue = boardValuesToCkeck[0];
      const isFinished = boardValuesToCkeck.every(
        (value) => value === checkingValue && checkingValue
      );
      winner = !isFinished ? null : checkingValue;
      winningPositionsIndex++;
    }
    if (winner) {
      setWinner(winner === "X" ? players[0] : players[1]);
      setStatus("finished");
      return;
    }
    setStatus(board.filter((value) => !value).length ? "started" : "finished");
  }, [board, players, status]);

  const handleClick = (index: number): void => {
    if (index < 0 || index > Number(level) * Number(level) || winner) return;
    const newBoard = [...board];
    newBoard.splice(index, 1, turn);
    setBoard(newBoard);
    const newTurn = turn === "X" ? "O" : "X";
    setTurn(newTurn);
  };
  const handleStart = (players: string[], gameLevel: Number) => {
    setPlayers(players);
    setLevel(gameLevel);
    setBoard(Array(Number(gameLevel) * Number(gameLevel)).fill(""));
    setTurn("X");
    setStatus("started");
  };
  const handleRestart = () => {
    setBoard(Array(Number(level) * Number(level)).fill(""));
    setWinner("");
    setStatus("created");
  };

  return {
    level,
    board,
    status,
    winner,
    handleClick,
    handleRestart,
    handleStart,
  };
};
