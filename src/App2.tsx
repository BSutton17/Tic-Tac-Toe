//Two Player version

import { Link } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";

function App2() {
  const [tLeft, setTleft] = useState("");
  const [tMid, setTMid] = useState("");
  const [tRight, setTRight] = useState("");
  const [mLeft, setMLeft] = useState("");
  const [mMid, setMMid] = useState("");
  const [mRight, setMRight] = useState("");
  const [bLeft, setBLeft] = useState("");
  const [bMid, setBMid] = useState("");
  const [bRight, setBRight] = useState("");
  const [count, setCount] = useState(0);
  const [winner, setWinner] = useState("");

  useEffect(() => {
    checkWinner(); // Check winner whenever winner changes
  }, [count]);

  //Game Loop
  const buttonPress = (location: string) => {
    //Player One's turn
    if (winner == "") {
      if (count % 2 == 0) {
        switch (location) {
          case "TL":
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

      //player two's turn
      else {
        switch (location) {
          case "TL":
            if (tLeft == "") {
              setTleft(tLeft + "O");
            }
            break;
          case "TM":
            if (tMid == "") {
              setTMid(tMid + "O");
            }
            break;
          case "TR":
            if (tRight == "") {
              setTRight(tRight + "O");
            }
            break;
          case "ML":
            if (mLeft == "") {
              setMLeft(mLeft + "O");
            }
            break;
          case "MM":
            if (mMid == "") {
              setMMid(mMid + "O");
            }
            break;
          case "MR":
            if (mRight == "") {
              setMRight(mRight + "O");
            }
            break;
          case "BL":
            if (bLeft == "") {
              setBLeft(bLeft + "O");
            }
            break;
          case "BM":
            if (bMid == "") {
              setBMid(bMid + "O");
            }
            break;
          case "BR":
            if (bRight == "") {
              setBRight(bRight + "O");
            }
            break;
        }
      }
      setCount(count + 1);
      checkWinner();
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
  };
  return (
    <>
      <h1>Multiplayer</h1>
      <div id="display">{winner}</div>
      <div id="container">
        <button id="top-left" onClick={() => buttonPress("TL")} className="btn">
          {tLeft}
        </button>
        <button id="top-mid" onClick={() => buttonPress("TM")} className="btn">
          {tMid}
        </button>
        <button
          id="top-right"
          onClick={() => buttonPress("TR")}
          className="btn"
        >
          {tRight}
        </button>
        <button id="mid-left" onClick={() => buttonPress("ML")} className="btn">
          {mLeft}
        </button>
        <button id="middle" onClick={() => buttonPress("MM")} className="btn">
          {mMid}
        </button>
        <button
          id="mid-right"
          onClick={() => buttonPress("MR")}
          className="btn"
        >
          {mRight}
        </button>
        <button
          id="bottom-left"
          onClick={() => buttonPress("BL")}
          className="btn"
        >
          {bLeft}
        </button>
        <button
          id="bottom-mid"
          onClick={() => buttonPress("BM")}
          className="btn"
        >
          {bMid}
        </button>
        <button
          id="bottom-right"
          onClick={() => buttonPress("BR")}
          className="btn"
        >
          {bRight}
        </button>
      </div>
      <button id="reset" onClick={() => reset()} className="reset">
        reset
      </button>
      <button id="back" className="reset">
        <Link to="/" className="Link-B">
          Back
        </Link>
      </button>
      <footer id="F-Multi">Created by Bryson Sutton</footer>
    </>
  );
}

export default App2;
