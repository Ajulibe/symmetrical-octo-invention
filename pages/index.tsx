import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "@src/layout";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import debounce from "lodash/debounce";
import { CmpFourProps } from "@src/sections/section-four";
import { FooterProps } from "@src/sections/footer";

//Dynamic Imports
const Pads = dynamic(() => import("@components/pads"), {
  ssr: false
});
const Header = dynamic<Record<string, never>>(
  () => import("@src/sections/header").then((mod) => mod.Header),
  {
    ssr: false
  }
);
const SectionOne = dynamic<Record<string, never>>(
  () => import("@src/sections").then((mod) => mod.SectionOne),
  {
    ssr: false
  }
);
const SectionTwo = dynamic<Record<string, never>>(
  () => import("@src/sections").then((mod) => mod.SectionTwo),
  {
    ssr: false
  }
);
const SectionThree = dynamic<Record<string, never>>(
  () => import("@src/sections").then((mod) => mod.SectionThree),
  {
    ssr: false
  }
);
const SectionFour = dynamic<CmpFourProps>(
  () => import("@src/sections").then((mod) => mod.SectionFour),
  {
    ssr: false
  }
);
const Footer = dynamic<FooterProps>(
  () => import("@src/sections/footer").then((mod) => mod.Footer),
  {
    ssr: false
  }
);

const Home: NextPage = () => {
  const hoverBg = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);
  const [showElements, setShowElements] = useState("none");

  useEffect(() => {
    cursorBg();
    extraCursor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowElements("block");
    }, 2700);
  });

  const extraCursor = debounce(function () {
    document.addEventListener("mousemove", (e) => {
      if (cursor.current) {
        cursor.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    });

    document.addEventListener("click", () => {
      if (cursor.current) {
        cursor.current.classList.add("expand");
      }
      setTimeout(() => {
        if (cursor.current) {
          cursor.current.classList.remove("expand");
        }
      }, 500);
    });
  }, 500);

  const cursorBg = debounce(function () {
    document.addEventListener("mousemove", (event) => {
      if (hoverBg.current) {
        hoverBg.current.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
      }
    });
  }, 500);

  const [showFooter, setShowFooter] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>A Robust Nextjs App Preconfigured for you</title>
        <meta name="description" content="Preconfigured Nextjs Template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div ref={hoverBg} className="mouseBg" style={{ display: showElements }}></div>

      <div className="greenBg" style={{ display: showElements }}></div>

      <Pads />

      {/* <Apiheader /> */}

      {/* <div className="info">
        <p className="header"> Income Protection</p>
        <p className="header__details">you get Paid if you loose your job</p>
        <button>Get Started</button>
      </div> */}
      <div className="cursor" ref={cursor}></div>

      <Layout>
        <Header />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour setShowFooter={setShowFooter} />
        <Footer showFooter={showFooter} />
      </Layout>
    </div>
  );
};

export default Home;
