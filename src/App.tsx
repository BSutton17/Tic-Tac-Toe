//Single Player Version

import { Link } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  // State variables
  const [tLeft, setTleft] = useState("");
  const [tMid, setTMid] = useState("");
  const [tRight, setTRight] = useState("");
  const [mLeft, setMLeft] = useState("");
  const [mMid, setMMid] = useState("");
  const [mRight, setMRight] = useState("");
  const [bLeft, setBLeft] = useState("");
  const [bMid, setBMid] = useState("");
  const [bRight, setBRight] = useState("");
  const [count, setCount] = useState(0); // Counter to keep track of moves
  const [winner, setWinner] = useState(""); // Store the winner of the game

  // Generate a random delay for the AI move
  let max = 1000;
  let min = 500;
  let rand = Math.floor(Math.random() * (max - min + 1) + min);
  useEffect(() => {
    checkWinner();
  }, [count]);

  
  // Array of valid moves
  let valid = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  //Game Loop
  const buttonPress = (location: string) => {
    if (winner !== "") {
      // If there is a winner, do not allow further moves
      return;
    } else if (winner == "") {
      //if (count % 2 == 0) {
      switch (location) {
        case "TL":
          // Check the selected location and update state accordingly
          if (tLeft == "") {
            setTleft(tLeft + "X");
          }
          break;
        case "TM":
          if (tMid == "") {
            setTMid(tMid + "X");
          }
          break;
        case "TR":
          if (tRight == "") {
            setTRight(tRight + "X");
          }
          break;
        case "ML":
          if (mLeft == "") {
            setMLeft(mLeft + "X");
          }
          break;
        case "MM":
          if (mMid == "") {
            setMMid(mMid + "X");
          }
          break;
        case "MR":
          if (mRight == "") {
            setMRight(mRight + "X");
          }
          break;
        case "BL":
          if (bLeft == "") {
            setBLeft(bLeft + "X");
          }
          break;
        case "BM":
          if (bMid == "") {
            setBMid(bMid + "X");
          }
          break;
        case "BR":
          if (bRight == "") {
            setBRight(bRight + "X");
          }
          break;
      }
    }
    setCount(count + 1);
  };
  // Function to handle AI's turn
  const AiTurn = () => {
    if (winner === "") {
      setTimeout(() => {
        // Filter available spots for the AI to choose from
        let availableSpots = valid.filter((spot) => {
          switch (spot + "") {
            case "1":
              return tLeft === "";
            case "2":
              return tMid === "";
            case "3":
              return tRight === "";
            case "4":
              return mLeft === "";
            case "5":
              return mMid === "";
            case "6":
              return mRight === "";
            case "7":
              return bLeft === "";
            case "8":
              return bMid === "";
            case "9":
              return bRight === "";
            default:
              return false;
          }
        });

        // If there are available spots, choose a random one
        if (availableSpots.length > 0) {
          const randomIndex = Math.floor(Math.random() * availableSpots.length);
          const chosenSpot = availableSpots[randomIndex] + "";

          // Update state based on AI's choice
          switch (chosenSpot) {
            case "1":
              setTleft("O");
              break;
            case "2":
              setTMid("O");
              break;
            case "3":
              setTRight("O");
              break;
            case "4":
              setMLeft("O");
              break;
            case "5":
              setMMid("O");
              break;
            case "6":
              setMRight("O");
              break;
            case "7":
              setBLeft("O");
              break;
            case "8":
              setBMid("O");
              break;
            case "9":
              setBRight("O");
              break;
            default:
              break;
          }
        }
        setCount(count + 1);
      }, rand);
    }
  };

  const checkWinner = () => {
    let winnerMessage = "";

    switch (true) {
      // Rows
      case tLeft === "X" && tMid === "X" && tRight === "X":
      case mLeft === "X" && mMid === "X" && mRight === "X":
      case bLeft === "X" && bMid === "X" && bRight === "X":
        winnerMessage = "X is the Winner!";
        break;

      case tLeft === "O" && tMid === "O" && tRight === "O":
      case mLeft === "O" && mMid === "O" && mRight === "O":
      case bLeft === "O" && bMid === "O" && bRight === "O":
        winnerMessage = "O is the Winner!";
        break;

      // Columns
      case tLeft === "X" && mLeft === "X" && bLeft === "X":
      case tMid === "X" && mMid === "X" && bMid === "X":
      case tRight === "X" && mRight === "X" && bRight === "X":
        winnerMessage = "X is the Winner!";
        break;

      case tLeft === "O" && mLeft === "O" && bLeft === "O":
      case tMid === "O" && mMid === "O" && bMid === "O":
      case tRight === "O" && mRight === "O" && bRight === "O":
        winnerMessage = "O is the Winner!";
        break;

      // Diagonals
      case tLeft === "X" && mMid === "X" && bRight === "X":
      case tRight === "X" && mMid === "X" && bLeft === "X":
        winnerMessage = "X is the Winner!";
        break;

      case tLeft === "O" && mMid === "O" && bRight === "O":
      case tRight === "O" && mMid === "O" && bLeft === "O":
        winnerMessage = "O is the Winner!";
        break;

      // Draw
      case count >= 9:
        winnerMessage = "It's a Draw!";
        break;
      default:
        winnerMessage = "";
        // If the move count is odd, it's AI's turn
        if (count % 2 == 1) {
          AiTurn();
          setCount(count + 1);
        }
        break;
    }

    setWinner(winnerMessage);
  }; // end of checkForWinner

  // Function to reset the game
  const reset = () => {
    setCount(0);
    setTleft("");
    setTMid("");
    setTRight("");
    setMLeft("");
    setMMid("");
    setMRight("");
    setBLeft("");
    setBMid("");
    setBRight("");
    setWinner("");
    valid = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  };

  return (
    <>
      <h1>Single Player</h1>
      <div id="display">{winner}</div>
      <div id="container">
        <button
          id="top-left"
          onClick={() => {
            buttonPress("TL");
          }}
          className="btn"
        >
          {tLeft}
        </button>
        <button
          id="top-mid"
          onClick={() => {
            buttonPress("TM");
          }}
          className="btn"
        >
          {tMid}
        </button>
        <button
          id="top-right"
          onClick={() => {
            buttonPress("TR");
          }}
          className="btn"
        >
          {tRight}
        </button>
        <button
          id="mid-left"
          onClick={() => {
            buttonPress("ML");
          }}
          className="btn"
        >
          {mLeft}
        </button>
        <button
          id="middle"
          onClick={() => {
            buttonPress("MM");
          }}
          className="btn"
        >
          {mMid}
        </button>
        <button
          id="mid-right"
          onClick={() => {
            buttonPress("MR");
          }}
          className="btn"
        >
          {mRight}
        </button>
        <button
          id="bottom-left"
          onClick={() => {
            buttonPress("BL");
          }}
          className="btn"
        >
          {bLeft}
        </button>
        <button
          id="bottom-mid"
          onClick={() => {
            buttonPress("BM");
          }}
          className="btn"
        >
          {bMid}
        </button>
        <button
          id="bottom-right"
          onClick={() => {
            buttonPress("BR");
          }}
          className="btn"
        >
          {bRight}
        </button>
      </div>
      <button id="reset" onClick={() => reset()} className="reset">
        Reset
      </button>
      <button id="back" className="reset">
        <Link to="/" className="Link-B">
          Back
        </Link>
      </button>
      <footer id="F-Single">Created by Bryson Sutton</footer>
    </>
  );
}

export default App;
