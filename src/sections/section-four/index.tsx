import { Container } from "./style"
import React from "react"
import Image from "next/image"
// import { Button } from "@components/button"

export const SectionFour = () => {
  const products = [
    {
      image: "/softmaterial.svg",
      alt: "softmaterial",
      title: "Soft Material",
      content:
        "The versatile space makes it easy to keep a fresh supply of ingredients",
    },
    {
      image: "/strongdurable.svg",
      alt: "strongdurable",
      title: "Strong Durable",
      content:
        "The versatile space makes it easy to keep a fresh supply of ingredients",
    },
    {
      image: "/beautifulmodel.svg",
      alt: "beautifulmodel",
      title: "Beautiful Model",
      content:
        "The versatile space makes it easy to keep a fresh supply of ingredients",
    },
    {
      image: "/superquality.svg",
      alt: "superquality",
      title: "Super Quality",
      content:
        "The versatile space makes it easy to keep a fresh supply of ingredients",
    },
  ]
  return (
    <Container>
      <div className="main">
        <div className="canvas__wrapper">
          <div className="black__canvas"></div>
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
                  <span className="grid__title">{item.title}</span>
                  <span className="grid__content">{item.content}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Container>
  )
}
