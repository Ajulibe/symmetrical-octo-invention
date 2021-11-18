import styled, { createGlobalStyle } from "styled-components"

export const MyComponent = styled.div`
  color: ${(props) => props.theme.colors.main};
`

export const MyGlobalStyle = createGlobalStyle`  
  html, body {
    font-family: 'Didact Gothic',Raleway,Baskervville, serif, Arial, Helvetica, sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 62.5%;
    -webkit-font-smoothing: subpixel-antialiased;
    text-rendering: optimizeLegibility;    
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;

  .mouseBg {
    color: #fff;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    position: fixed;
    width: 40vh;
    height: 40vh;
    left:-20vh;
    top: -20vh;
    border-radius: 50%;
    background: radial-gradient(circle,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,.1) 25%,hsla(0,0%,100%,0) 70%);
    backdrop-filter: blur(15px);
  }

    
  }


  @media only screen and (max-width: 858px) {
    html, body {
      font-size: 95%;
  
    }
  }
  @media only screen and (max-width: 768px) {
    html, body {
      font-size: 71.5%;
    }
  }

  /* Only using * omits pseudo elements so specifically include these  */
  * , *:before, *:after {
    box-sizing: inherit;
  }
`
