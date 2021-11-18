import styled, { createGlobalStyle, css } from "styled-components"

// theme is now fully typed
export const MyComponent = styled.div`
  color: ${(props) => props.theme.colors.main};
`

// theme is also fully typed
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

  .mouseBg{
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


   .grid__wrapper{
    display: grid;
    grid-template-columns: repeat(20, 5vw);
    background: rgba(255,255,255,0.1);
    z-index: 10;
    

    .grid{
      border: 0.3px solid hsla(0,0%,10%,.5);
      border-radius: 10px;
      width: 5vw;
      height: 5vw;
      margin-bottom: 2px;
      background: black;
      filter: blur(50%);  
      -webkit-tap-highlight-color: transparent;
      transition: all 0.2s ease-in;

      &:hover{
        transform: perspective(1000px);
        transform: rotateX(1deg);
        transform: scale(1.01)
      }
    }
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

// and this theme is fully typed as well
export const cssHelper = css``
