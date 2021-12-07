import Image from "next/image";
import { Container } from "./style";
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
                  <Image src={item.src} alt={item.alt} width={42} height={42} />
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </Container>
  );
};
