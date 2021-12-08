/*eslint-disable @typescript-eslint/no-explicit-any*/
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "@src/layout";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import _ from "lodash";
import { Footer } from "@src/sections/footer";

//Dynamic Imports
const Pads = dynamic(() => import("@components/pads"));
const Header = dynamic(() => import("@src/sections/header").then((mod) => mod.Header) as any);
const SectionOne = dynamic(() => import("@src/sections").then((mod) => mod.SectionOne) as any);
const SectionTwo = dynamic(() => import("@src/sections").then((mod) => mod.SectionTwo) as any);
const SectionThree = dynamic(() => import("@src/sections").then((mod) => mod.SectionThree) as any);
const SectionFour = dynamic(() => import("@src/sections").then((mod) => mod.SectionFour) as any);

const Home: NextPage = () => {
  const hoverBg = useRef<HTMLDivElement>(null);

  useEffect(() => {
    cursorBg();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cursorBg = _.debounce(function () {
    document.addEventListener("mousemove", (event) => {
      if (hoverBg.current) {
        hoverBg.current.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
      }
    });
  }, 500);

  return (
    <div className={styles.container}>
      <Head>
        <title>A Robust Nextjs App Preconfigured for you</title>
        <meta name="description" content="Preconfigured Nextjs Template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div ref={hoverBg} className="mouseBg"></div>

      {/* <div className="greenBg"></div> */}

      <Pads />

      {/* <Apiheader /> */}

      {/* <div className="info">
        <p className="header"> Income Protection</p>
        <p className="header__details">you get Paid if you loose your job</p>
        <button>Get Started</button>
      </div> */}

      <Layout>
        <Header />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <Footer />
      </Layout>
    </div>
  );
};

export default Home;
