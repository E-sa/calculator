import React from "react";
import Calculator from "./component/Calculator";
import ThemeSwitcherContainer from "./component/ThemeSwitcherContainer";

import { ThemeProvider } from "styled-components";

import GlobalStyle from "./themes/GlobalStyle";
import { themeOne } from "./themes/themeOne";
import { themeTwo } from "./themes/themeTwo";
import { themeThree } from "./themes/themeThree";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      themeNum: themeOne,
    };
  }

  changeTheme = (theme) => {
    if (theme === "ThemeOne") {
      this.setState({
        themeNum: themeOne,
      });
    } else if (theme === "ThemeTwo") {
      this.setState({
        themeNum: themeTwo,
      });
    } else if (theme === "ThemeThree") {
      this.setState({
        themeNum: themeThree,
      });
    }
  };

  render() {
    return (
      <ThemeProvider theme={this.state.themeNum}>

        <GlobalStyle />
        
        <div className="container">
     
          <ThemeSwitcherContainer onChangeTheme={this.changeTheme} />
     
          <Calculator />
     
        </div>
     
      </ThemeProvider>
    );
  }
}

export default App;
