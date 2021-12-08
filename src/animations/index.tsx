import { keyframes } from "styled-components";

//SECTION 1
export const moveInfadeIn = keyframes`
0% {
  opacity: 0;
  transform: translateY(100px);
}

100% {
    opacity: 1;
    transform: translateY(0);

}
`;

export const moveInRightfadeIn = keyframes`
0% {
  opacity: 0;
  transform: translateY(100px);
}

100% {
    opacity: 1;
    transform: translateY(0);

}
`;

export const growWidth = keyframes`
0% {
  width: 0;
  opacity: 0;
}

100% {
  width: 8rem;
  opacity: 1;
}
`;

export const BgColorfadeIn = keyframes`
from {
  opacity: 0.4;
}
to {
  background: linear-gradient(
        to right,
        hsl(98 100% 62%),
        hsl(204 100% 59%)
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      opacity: 1;
}
`;

export const fadeIn = keyframes`
0% {
  opacity: 0;
}

100% {
    opacity: 1;
}
`;

//SECTiON 2
export const translateIn = keyframes`
0% {
    transform: translateY(100px)
}

100% {
    transform: translateY(0)
}
`;
export const underline = keyframes`
0% {
    width: 0%
}

100% {
    width: 100%

}
`;
