/* eslint-disable @typescript-eslint/ban-ts-comment */
/*eslint-disable @typescript-eslint/no-explicit-any*/
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "@src/layout";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import _ from "lodash";

//Dynamic Imports
const Pads = dynamic(() => import("@components/pads"), {
  ssr: false
});
const Header = dynamic(() => import("@src/sections/header").then((mod) => mod.Header) as any, {
  ssr: false
});
const SectionOne = dynamic(() => import("@src/sections").then((mod) => mod.SectionOne) as any, {
  ssr: false
});
const SectionTwo = dynamic(() => import("@src/sections").then((mod) => mod.SectionTwo) as any, {
  ssr: false
});
const SectionThree = dynamic(() => import("@src/sections").then((mod) => mod.SectionThree) as any, {
  ssr: false
});
const SectionFour = dynamic(() => import("@src/sections").then((mod) => mod.SectionFour) as any, {
  ssr: false
});
const Footer = dynamic(() => import("@src/sections/footer").then((mod) => mod.Footer) as any, {
  ssr: false
});

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
    }, 1500);
  });

  const extraCursor = _.debounce(function () {
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

  const cursorBg = _.debounce(function () {
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
        {/* @ts-ignore */}
        <SectionFour setShowFooter={setShowFooter} />
        {/* @ts-ignore */}
        <Footer showFooter={showFooter} />
      </Layout>
    </div>
  );
};

export default Home;
