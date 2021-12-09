import Image from "next/image";
import { Container, Switch } from "./style";
import { useState } from "react";
import Link from "next/link";

const links: ILinks[] = [
  {
    src: "/facebook.svg",
    alt: "Facebook Logo"
  },
  {
    src: "/instagram.svg",
    alt: "Instagram Logo"
  },
  {
    src: "/twitter.svg",
    alt: "Twitter Logo"
  },
  {
    src: "/linkedin.svg",
    alt: "Linkedin Logo"
  }
];

interface ILinks {
  src: string;
  alt: string;
}

export const Header = () => {
  const [light, setLight] = useState(false);

  const lightPath =
    "M392 196C392 304.248 304.248 392 196 392C87.7522 392 0 304.248 0 196C0 87.7522 87.7522 0 196 0C304.248 0 392 87.7522 392 196Z";
  const darkPath =
    "M260.18 229.5C241.382 336.103 137.505 387.728 31.5052 389.691C-77 391.701 130.592 316.568 149.389 209.965C168.186 103.361 -5.41097 -16.3544 101.192 2.44263C207.796 21.2397 278.977 122.897 260.18 229.5Z";

  const switchMode = () => {
    if (light) {
      setLight(false);
    } else {
      setLight(true);
    }
  };

  const DarkModeSwitch = () => {
    return (
      <Switch onClick={switchMode} light={light}>
        <div className="switch__wrapper">
          <svg
            width="230"
            height="392"
            viewBox="0 0 230 392"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="moonface"
              d={light ? lightPath : darkPath}
              fill="url(#paint0_linear_101_7)"
            />

            <defs>
              <linearGradient
                id="paint0_linear_101_7"
                x1="499"
                y1="172"
                x2="-120.5"
                y2="181.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.185341" stopColor="#84FF3D" stopOpacity="0.7" />
                <stop offset="0.744792" stopColor="#23A6D5" stopOpacity="0.69" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </Switch>
    );
  };

  return (
    <Container>
      <div className="header__name">
        <Link href="/">
          <a>Fabble.</a>
        </Link>
      </div>

      <nav className="header__links">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/">
          <a>About</a>
        </Link>
        <Link href="/">
          <a>Product</a>
        </Link>
        <Link href="/">
          <a>Contact Us</a>
        </Link>
      </nav>

      <div className="header__social-icons">
        {links.map((item: ILinks) => {
          return (
            <div key={item.alt}>
              <Link href="/">
                <a>
                  <Image src={item.src} alt={item.alt} width={42} height={42} priority />
                </a>
              </Link>
            </div>
          );
        })}
        <DarkModeSwitch />
      </div>
    </Container>
  );
};
