import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Calculator = () => {
  const [amt, setAmt] = useState("");
  const [input, setInput] = useState(0);
  const [input2, setInput2] = useState(0);
  let sto = 0;
  function EB_Calculator() {
    if (input === 0 && input2 === 0) {
      return setAmt("");
    } else {
      let Different = input2 - input;

      if (Different <= 500 && Different > 0) {
        if (Different >= 100) {
          Different = Different - 100;
        } else
          return setAmt("Your are below 100units so Your payable amount is 0");

        if (Different >= 100) {
          sto += 225;
          Different = Different - 100;
        } else {
          sto += Different * 2.25;
          return setAmt(sto);
        }

        if (Different >= 200) {
          sto += 900;
          Different = Different - 200;
        } else {
          sto += Different * 4.5;
          return setAmt(sto);
        }

        if (Different >= 100) {
          sto += 600;
          Different = Different - 100;
        } else sto += Different * 6;
        return setAmt(sto);
      }
      else {
        if (Different >= 100) {
          Different = Different - 100;
          // console.log( Different)
        } else return setAmt(sto);
        if (Different >= 300) {
          sto += 1350;
          Different = Different - 300;
        } else {
          sto += Different * 4.5;
          return setAmt(sto);
        }

        if (Different >= 100) {
          sto += 600;
          Different = Different - 100;
        } else {
          sto += Different * 6;
          return setAmt(sto);
        }

        if (Different >= 100) {
          sto += 800;
          Different = Different - 100;
        } else {
          sto += Different * 8;
          return setAmt(sto);
        }

        if (Different >= 200) {
          sto += 1800;
          Different = Different - 200;
        } else {
          sto += Different * 9;
          return setAmt(sto);
        }

        if (Different >= 200) {
          sto += 2000;
          Different = Different - 200;
          sto += Different * 11;
          return setAmt(sto);
        } else {
          sto += Different * 4.5;
          return setAmt(sto);
        }
      }
    }
  }

  function clear() {
    setAmt("");
  }

  return (
    <main>
      <div className="calculator-outter">
        <div className="calculator">
          <h1>EB calculator</h1>
          <div className="input">
            <form
              className="form"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                type="number"
                placeholder="PreviousUnit"
                required
                onChange={(e) => {
                  setInput(e.target.value);
                }}
              />{" "}
              <br />
              <input
                type="number"
                placeholder="CurrentUnit"
                required
                onChange={(e) => {
                  setInput2(e.target.value);
                }}
              />
              <div className="button">
                <button onClick={() => EB_Calculator()}>Calculate</button>
              </div>
              <div className="clear-button">
                <button onClick={() => clear()}>Clear</button>
              </div>
            </form>
          </div>
          <div className="output">
            {amt.length > 6 ? (
              <h5 style={{ color: "red" }}>{amt}</h5>
            ) : amt > 0 ? (
              <h1>{amt} </h1>
            ) : null}
            {amt === "" ? (
              <p style={{ color: "blue" }}> <span style={{color:"red"}}>Guidelines</span><br />  1.Put last month reading as a PreviousUnit. <br />2.Check the current reading in your reading meter and put it in the current unit.<br /> <span style={{color:"red"}}>Note: </span>This will only for home use </p>
            ) : amt > 3000 ? (
              <div>
                <p>
                  Your eletricity bill amount is slightly higher then usual
                  amount
                </p>
                <p>
                  Visit our Homepage to reduce you'r bill amount in the next
                  time {<Link to="/"> Home</Link>}
                </p>
              </div>
            ) : amt >= 1 ? (
              <p>Your consuming a average eletricity </p>
            ) : amt < 0 ? (
              <p style={{ color: "red" }}>
                Current unit should be higher then previous unit
              </p>
            ) : null}
          </div>
        </div>
      </div>  
    </main>
  );
};

export default Calculator;
