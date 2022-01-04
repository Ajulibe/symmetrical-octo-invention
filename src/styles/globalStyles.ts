import styled, { createGlobalStyle } from "styled-components";
import { animationUtils } from "@src/animations";

export const MyComponent = styled.div`
  color: ${(props) => props.theme.colors.main};
`;

export const MyGlobalStyle = createGlobalStyle`  
  html, body {
    font-family: 'Didact Gothic',Raleway,Baskervville, serif, Arial, Helvetica, sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;    
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
    scroll-behavior: smooth;
    text-shadow: 0 -1px 1px rgb(255 255 255 / 1%);
    /* cursor: none; */
      
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

  .cursor {
    color: #fff;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    position: fixed;
    width: 5vh;
    height: 5vh;
    left:-2.5vh;
    top: -2.5vh;
    border-radius: 50%;
    border: 1px solid white;
    transition: all 0.09s linear;
    pointer-events: none;
    z-index: 1000000;

    &::after {
    content: "";
    width: 8vh;
    height: 8vh;
    left: -1.6vh;
    top: -1.6vh;
    position: absolute;
    border: 2px solid #ff0;
    border-radius: 50%;
    opacity: .5;
    animation: ${animationUtils.cursorAnimTwo}  0.8s infinite alternate;
   }

}

.expand {
    transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    border: 1px solid hsl(98, 100%, 62%, 0.7);
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
`;
