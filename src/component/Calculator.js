import React from "react";
import "../style/style.scss";

import GridContainer from "./GridContainer";

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      //what we see in calculator screen
      ShowOnScreen: "",
      //what we use behind the scene to calculate
      keepData: [],
      //in these cases it becomes true and empty the array and screen: 
      //one: when user select a number right after "="
      //two: when user select Del right after "="
      isDelEqualToReset: false,
      //in this case it becomes true:
      //one: when number starts with 0. exm: 021, 032
      isDanger: false,
    };
  }

  //this part kept repeating in calculate function so i made it a seperate function
  UpdateThescreen = (calculate) => {
    this.setState(
      (prevState) => ({
        ShowOnScreen: prevState.ShowOnScreen + calculate,
        keepData: this.state.keepData.concat(calculate),
      }),
      () => console.log(this.state.keepData)
    );
  };

  //know this: type of operations are string and type of numbers are Number
  //here we see the math behind this calculator
  calculate = (calculate) => {

    const ShowOnScreen = this.state.ShowOnScreen;
    const keepData = this.state.keepData;
    const isDelEqualToReset = this.state.isDelEqualToReset;
    const isDanger = this.state.isDanger;


    

    //1. when user selects a number
    if (typeof calculate == "number") {
      
      //1.1 if the number is zero while screen is still empty = DANGER!
      if (calculate === 0 & ShowOnScreen.length===0) {
        this.setState({
          isDanger:true
        })
      }
      //1.2 if right after operation user selects 0 = DANGER!
      if (calculate === 0 & typeof keepData[keepData.length - 1] === "string" ) {
        this.setState({
          isDanger:true
        })
      }
      //1.3. can't select several 0 in danger situation
      if(calculate===0 & isDanger){
        return
      }

      //1.3 and danger means we should replace 0 with the next number. exp: 03 = 3.
      if(isDanger & typeof keepData[keepData.length - 1] !== "string" ){
        var array = [...keepData];
        array.splice(keepData.length - 1);
        array.push(calculate);

        var screen = ShowOnScreen.slice(0, -1).concat(calculate);

        this.setState(
          {
            keepData: array,
            ShowOnScreen: screen,
            isDanger:false
          },
          () => console.log(this.state.keepData))
          return

      }

      //1.4 when user selects a number right after "=" we empty the screen first then display the selected number
      if (isDelEqualToReset) {

        this.setState(
          {
            ShowOnScreen: calculate.toString(),
            keepData: [calculate],
            isDelEqualToReset: false,
          },
          () => console.log(this.state.keepData, this.state.isDelEqualToReset)
        );

        //1.5 if none of the above scenario add the selected number to the screen and the arra
      } else {
        this.UpdateThescreen(calculate);
      }
    }

    //2. when user choose an operation
    if (
      calculate === "+" ||
      calculate === "-" ||
      calculate === "/" ||
      calculate === "*"
    ) {

      //2.1 user cant select / or * when there is no number on the screen
      if((calculate ==="*" ||calculate === "/") & ShowOnScreen.length===0){
        return
      }
      //2.2. when user choose two operation right after each other it replace them
      else if (
        keepData[keepData.length - 1] === "+" ||
        keepData[keepData.length - 1] === "-" ||
        keepData[keepData.length - 1] === "*" ||
        keepData[keepData.length - 1] === "/"
      ) {
        array = [...keepData];
        array.splice(keepData.length - 1);
        array.push(calculate);

        screen = ShowOnScreen.slice(0, -1).concat(calculate);

        this.setState(
          {
            keepData: array,
            ShowOnScreen: screen,
          },
          () => console.log(this.state.keepData)
        );
        //2.3 when user doesn't choose two operation right after each other!
      } else {
        this.UpdateThescreen(calculate);
      }
    }

    //3.  del = pop from array
    if (calculate === "Del") {
      //3.1 if user select del right after "=" empty the array and screen
      if (this.state.isDelEqualToReset) {
        this.setState({
          ShowOnScreen: "",
          keepData: [],
          isDelEqualToReset: false,
        });
        //3.2 if not only pop the last item in array
      } else {
        array = [...keepData];
        array.splice(keepData.length - 1);

        var screen2 = ShowOnScreen.slice(0, -1);

        this.setState(
          {
            keepData: array,
            ShowOnScreen: screen2,
          },
          () => console.log(this.state.keepData)
        );
      }
    }

    // 4. user cant use two or more "." in a row
    if (calculate === ".") {
      if (keepData[keepData.length - 1] !== ".") {
        this.UpdateThescreen(calculate);
      }
    }

    //5.Reset = empty the array and screen
    if (calculate === "Reset") {
      this.setState({
        ShowOnScreen: "",
        keepData: [],
      });
    }

    //6. ...is equal to:
    if (calculate === "=") {
      //6.1 if user chose "=" right after an aperation do nothing
      if (typeof keepData[keepData.length - 1] === "string") {
        return;
        //6.2 else show the result
      } else {

       // var hey = eval(keepData.toString().replaceAll(",", ""));
        //var hoy = hey.toString();


        //this.setState(
         // {
           // ShowOnScreen: hey,
            //isDelEqualToReset: true,
            //keepData:[hoy]
          //},
          //() => console.log(this.state.ShowOnScreen)
        //);
      }
    }
  };

  render() {
    return (
      <>
  
        <div className="screen">{this.state.ShowOnScreen}</div>

        <GridContainer onLetsCalculate={this.calculate} />
      
      </>
    );
  }
}

export default Calculator;
