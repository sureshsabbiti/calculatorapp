import { useState } from "react";
import "./style.css";
const buttons = [
  [
    { label: "C", value: "C" },
    { label: "DEL", value: "DEL" },
    { label: "+", value: "+" },
    { label: "%", value: "%" },
  ],
  [
    { label: "7", value: "7" },
    { label: "8", value: "8" },
    { label: "9", value: "9" },
    { label: "/", value: "/" },
  ],
  [
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" },
    { label: "*", value: "*" },
  ],
  [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "-", value: "-" },
  ],
  [
    { label: ".", value: ".", id: "dot" },
    { label: "0", value: "0" },
    { label: "=", value: "=", id: "equal" },
  ],
];

const ops = ["+", "-", "*", "/", "%"];
function Calculator() {
  const [result, setResult] = useState("0");

  const handleclick = (input) => {
    if (result == "0") {
      if (input != "C" && input != "DEL" && input != "=") {
        setResult(input);
      }
    } else {
      if (input == "DEL") {
        setResult(result.substring(0, result.length - 1));
      }
      if (input == "C") {
        setResult("0");
      }
      if (input != "C" && input != "DEL" && input != "=") {
        if (ops.includes(result.slice(-1)) && ops.includes(input)) {
          return;
        }
        setResult(result + input);
      }
      if (input == "=") {
        if (ops.includes(result.slice(-1))) {
          return;
        }
        setResult(eval(result).toString());
      }
    }
  };

  return (
    <div className="container">
      <div className="result">
        <p id="result"> {result}</p>
      </div>
      <div className="buttons">
        {buttons.map((row, i) => {
          return (
            <div className="row" key={i}>
              {row.map((button) => {
                return (
                  <button
                    id={button.id}
                    key={button.label}
                    style={{ backgroundColor: "#6C5B7B" }}
                    onClick={() => {
                      handleclick(button.value);
                    }}
                  >
                    {button.label}
                  </button>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Calculator;