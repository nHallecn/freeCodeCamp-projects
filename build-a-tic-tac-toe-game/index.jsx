
const { useState } = React;

export function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  const calculateWinner = (board) => {
    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (squares[index] || winner) return;

    const newSquares = [...squares];
    newSquares[index] = isXNext ? "X" : "O";

    const gameWinner = calculateWinner(newSquares);

    setSquares(newSquares);
    setIsXNext(!isXNext);
    setWinner(gameWinner);
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  const isDraw = !winner && squares.every(Boolean);

  return (
    <div className="game">
      <div className="board">
        {squares.map((value, index) => (
          <button
            key={index}
            className="square"
            onClick={() => handleClick(index)}
          >
            {value}
          </button>
        ))}
      </div>

      <p className="status">
        {winner && `Winner: ${winner}`}
        {!winner && isDraw && "Draw"}
        {!winner && !isDraw && "Game in progress"}
      </p>

      <button id="reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

