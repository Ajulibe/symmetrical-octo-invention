import { Container } from "./style"
import React from "react"
import Image from "next/image"
import { BetterClothing, CompanyCarousel } from "./components"
import { IMAGES } from "@src/components/data/images"
// import { Button } from "@components/button"

export const SectionFour = () => {
  const products = [
    {
      image: "/softmaterial.svg",
      alt: "softmaterial",
      title: "Soft Material",
      color: "#23a6d5",
      content:
        "The versatile space makes it easy to keep a fresh supply of ingredients",
    },
    {
      image: "/strongdurable.svg",
      alt: "strongdurable",
      title: "Strong Durable",
      color: "#e73c7e",
      content:
        "The versatile space makes it easy to keep a fresh supply of ingredients",
    },
    {
      image: "/beautifulmodel.svg",
      alt: "beautifulmodel",
      title: "Beautiful Model",
      color: "#23d5ab",
      content:
        "The versatile space makes it easy to keep a fresh supply of ingredients",
    },
    {
      image: "/superquality.svg",
      alt: "superquality",
      title: "Super Quality",
      color: "#ee7752",
      content:
        "The versatile space makes it easy to keep a fresh supply of ingredients",
    },
  ]
  return (
    <Container>
      <div className="main">
        <div className="canvas__wrapper">
          <div className="black__canvas">
            <Image
              src={IMAGES["section-two"]}
              alt="fullimage"
              width="1700"
              height="2500"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="section">
          <span className="section__name">FEATURES</span>
          <span className="section__heading">Our vision lives on there</span>
          <div className="section__grid">
            {products.map((item, index) => {
              return (
                <div className="grid" key={`${item.alt}${index}`}>
                  <div className="grid__image">
                    <Image
                      src={item.image}
                      height={55}
                      width={55}
                      alt={item.alt}
                    />
                  </div>
                  <span className="grid__title" style={{ color: item.color }}>
                    {item.title}
                  </span>
                  <span className="grid__content">{item.content}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <BetterClothing />
      {/* <CompanyCarousel /> */}
    </Container>
  )
}
