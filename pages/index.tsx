import type { NextPage } from "next";
import Head from "next/head";
import styles from "@styles/Home.module.css";
import Layout from "@src/layout";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import debounce from "lodash/debounce";
import { CmpFourProps } from "@src/sections/section-four";
import { FooterProps } from "@src/sections/footer";

// Dynamic Imports
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
  () => import("@src/sections/section-one").then((mod) => mod.SectionOne),
  {
    ssr: false
  }
);
const SectionTwo = dynamic<Record<string, never>>(
  () => import("@src/sections/section-two").then((mod) => mod.SectionTwo),
  {
    ssr: false
  }
);
const SectionThree = dynamic<Record<string, never>>(
  () => import("@src/sections/section-three").then((mod) => mod.SectionThree),
  {
    ssr: false
  }
);
const SectionFour = dynamic<CmpFourProps>(
  () => import("@src/sections/section-four").then((mod) => mod.SectionFour),
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
    }, 5000);
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

  // useEffect(() => {
  //   console.log("initial readyState:" + document.readyState);

  //   document.addEventListener("readystatechange", () =>
  //     console.log("readyState:" + document.readyState)
  //   );
  //   document.addEventListener("DOMContentLoaded", () => console.log("DOMContentLoaded"));

  //   window.onload = () => console.log("window onload");
  // });

  return (
    <div className={styles.container}>
      <Head>
        <title>A Robust Nextjs App Preconfigured for you</title>
        <meta name="description" content="Fashion Themed" />
      </Head>

      <div ref={hoverBg} className="mouseBg" style={{ display: showElements }}></div>

      <div className="greenBg" style={{ display: showElements }}></div>

      <Pads />

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
