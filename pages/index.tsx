import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "@src/layout";
import { Header } from "@src/sections/header";
import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import _ from "lodash";
import {
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour
  // Testheader,
  // Apiheader,
} from "@src/sections";
import { Footer } from "@src/sections/footer";
const Pads = dynamic(() => import("@components/pads"));
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

      <div className="greenBg"></div>

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
        {/* <SectionFour /> */}
        <Footer />
      </Layout>
    </div>
  );
};

export default Home;
