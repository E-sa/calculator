import React from "react";


const gridItems =[
    ["eight", 8],
    ["seven", 7],
    ["nine", 9],
    ["del", "Del"],
    ["four", 4],
    ["five", 5],
    ["six", 6],
    ["plus", "+"],
    ["one", 1],
    ["two", 2],
    ["three", 3],
    ["minus", "-"],
    ["dot", '.'],
    ["zero", 0],
    ["division", "/"],
    ["multiply", "*"],
    ["reset", "Reset"],
    ["equal", "="]
]

function GridContainer({onLetsCalculate}) {
  return(

  <div className="grid-container">
      {gridItems.map((result, index) => {
          return(
            <div className="grid-item" key={index} onClick={() =>onLetsCalculate(result[1])} id={result[0]}  style={{ gridArea: result[0] }}>
            {result[1]}
          </div>
          )
      })}
  </div>
  );
}

export default GridContainer;
