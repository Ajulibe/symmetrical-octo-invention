import type { NextPage } from "next"
import Head from "next/head"
import styles from "../styles/Home.module.css"
import Layout from "@src/layout"
import { Header } from "@src/sections/header"
import { useEffect, useRef } from "react"
import {
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour,
} from "@src/sections"
import { Pads } from "@components/pads"

const Home: NextPage = () => {
  const hoverBg = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      if (hoverBg.current) {
        hoverBg.current.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`
      }
    })
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>A Robust Nextjs App Preconfigured for you</title>
        <meta name="description" content="Preconfigured Nextjs Template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div ref={hoverBg} className="mouseBg"></div>

      <Pads />

      <Layout>
        <Header />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </Layout>
    </div>
  )
}

export default Home
