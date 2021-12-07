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
    scroll-behavior: smooth;
      
  .mouseBg {
    color: #fff;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    position: fixed;
    width: 65vh;
    height: 65vh;
    left:-31.5vh;
    top: -31.5vh;
    border-radius: 50%;
    background: radial-gradient(circle,hsla(255,100%,100%) 0,hsla(0,0%,100%,.1) 25%,hsla(0,0%,100%,0) 70%);
    /* backdrop-filter: blur(15px); */

   
  }

  .greenBg {
    box-sizing: border-box;
    position: fixed;
    width: 50vh;
    height: 50vh;
    right: 200px;
    margin-top: 22vh;
    border-radius: 30%;
    background-color:  hsl(98 100% 62%);
    animation: fadeIn 2s ease-in forwards 0.2s;
    opacity: 0;

    @keyframes fadeIn {
      0% {
        opacity: 0.4;
        transform: scale(1) translateX(100px)
      }
      50% {
        opacity: 0.1;
        transform: scale(50)
      }

      100%{
        opacity: 0;
        transform: scale(100) translateX(-100px)
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
