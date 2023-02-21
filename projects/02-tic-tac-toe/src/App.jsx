import { useState } from "react";
import confetti from "canvas-confetti";
import { Square } from "./components/Square.jsx";
import { TURNS} from "./components/constants.js";
import { checkWinnerFrom, checkEndGame } from "./logic/board.js";
import { WinnerModal } from "./components/WinnerModal.jsx";


function App() {
  const [board, setBoard] = useState(()=>{
    const boardFromStorage = window.localStorage.getItem("board")
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })


  const [turn, setTurn] = useState(()=>{
    const turnFromStorage = window.localStorage.getItem("turn")
    return turnFromStorage ?? TURNS.X
  })

  const [winner, setWinner] = useState(null) // Null es que no hay ganador, false es empate

  const resetGame = () =>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    window.localStorage.removeItem("board")
    window.localStorage.removeItem("turn")
  }

  const updateBoard = (index)=>{

    //No sobreescribe la posicion si ya tiene algo

    if(board[index] || winner) return
    //Actualizar el tablero
    const newBoard = [... board]
    newBoard[index] = turn
    setBoard(newBoard)
    // cambiar turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    //Guardar aquí la partida
    window.localStorage.setItem("board", JSON.stringify(newBoard))
    window.localStorage.setItem("turn", newTurn)
    //Revisa si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner){
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)){
      setWinner(false) //empate
    }
  }

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className="game">
        {
        board.map((square, index)=>{
          return(
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          )
        })
        }
      </section>

      <section className="turn">
      <Square isSelected={turn===TURNS.X}>{TURNS.X}</Square>
      <Square isSelected={turn===TURNS.O}>{TURNS.O}</Square>
      </section>
        
        <WinnerModal resetGame={resetGame} winner={winner}/>
    </main>
  )
}

export default App