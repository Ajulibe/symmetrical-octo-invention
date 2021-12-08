import { keyframes, css } from "styled-components";

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

//SECTiON 4
export const Expand = keyframes`
0% {
    transform: scale(0.2);
    opacity: 0;
}


100% {
    transform: scaleX(1);
    opacity: 1
}
`;

export const moveInRightfadeIn = keyframes`
0% {
  clip-path: circle(2% at 85% 32%);
  opacity: 0
}

100% {
    clip-path: circle(100.0% at 50% 50%);
    opacity: 1
}
`;

export const borderAnim = keyframes`
0%{
  border-color:  #ee7752
}
25%{
  border-color:   #23a6d5
}

50%{
  border-color:  hsl(98 100% 62%)
}
75%{
  border-color:  #e73c7e
}
100% {
  border-color:    #23d5ab
}
`;

type D = "X" | "Y" | "Z";

//Translation Mixin
export const animationUtils = {
  translateElement: (direction: D, start: string, end: number | string) => {
    const animation = keyframes`
    0% {
    transform: translate${direction}(${start});
     }
    100% {
    transform: translate${direction}(${end});
    }
`;
    return animation;
  },

  transition: (properties: string, type = "linear", time = "0.25s") => {
    return css`
      transition: ${time} ${type};
      transition-property: ${properties};
      will-change: ${properties};
    `;
  },

  disabledStyle: (disabled = false) => {
    return css`
      opacity: ${disabled ? 0.6 : ""};
      cursor: ${disabled && "default"};
    `;
  },

  cursorAnim: () => {
    const animation = keyframes`
    from {
        transform: scale(1);
    }
    to {
        transform: scale(.7);
    }
    `;
    return animation;
  },
  cursorAnimTwo: () => {
    const animation = keyframes`
    from {
        transform: scale(1);
    }
    to {
        transform: scale(.8);
    }
    `;
    return animation;
  },
  cursorAnimThree: () => {
    const animation = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(3);
    }
    100% {
        transform: scale(1);
        opacity: 0;
    }
    `;
    return animation;
  }
};
