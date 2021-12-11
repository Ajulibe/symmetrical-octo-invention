import React from "react";
import Link from "next/link";
import Image from "next/image";

export const FooterLinks = () => {
  interface ILinks {
    src: string;
    alt: string;
  }

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

  return (
    <div className="main__content section__three">
      <div className="section__three-icons">
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
      </div>
      <div className="section__three-message">
        Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod.
      </div>
    </div>
  );
};
