import  { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle `
  body{
    background-color: ${(props) => props.theme.bodyBackgroundColor};
  }
  .screen{
    background-color: ${(props) => props.theme.screenBackgroundColor};
  }
  .grid-container{
    background-color: ${(props) => props.theme.gridContainerBackgroundColor};

  }
.grid-item{
  background-color: ${(props) => props.theme.gridItemBackgroundColor};
  box-shadow: ${(props) => props.theme.boxShadow};
  -webkit-box-shadow: ${(props) => props.theme.boxShadowWebkit};
  -moz-box-shadow: ${(props) => props.theme.boxShadowMoz};
  color: ${(props) => props.theme.gridItemColor};
  
}

#equal{
  box-shadow: ${(props) => props.theme.boxShadow_equal};
  -webkit-box-shadow: ${(props) => props.theme.boxShadowWebkit_equal};
  -moz-box-shadow: ${(props) => props.theme.boxShadowMoz_equal};

  color:${(props) => props.theme.equal_color};

}
.switch__inner{
  background-color: ${(props) => props.theme.switch__innerBackgroundColor};
  
  
}
.switch__inner::after, #equal{
  background-color: ${(props) => props.theme.CircleInsideswitch_and_equal};  
}

h2, .switch-container, .screen{
  color:${(props) => props.theme.fontColor}
}

#reset, #del{
  background-color: ${(props) => props.theme.Reset_and_Del_BackGroundColor};

  box-shadow: ${(props) => props.theme.boxShadow_Del_reset};
  -webkit-box-shadow: ${(props) => props.theme.boxShadowWebkit_Del_reset};
  -moz-box-shadow: ${(props) => props.theme.boxShadowMoz_Del_reset};

  color:${(props) => props.theme.Del_Reset_color}
}


`;

export default GlobalStyle;