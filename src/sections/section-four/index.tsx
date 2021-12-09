import { Container } from "./style";
import React from "react";
import Image from "next/image";
import { BetterClothing, CompanyCarousel } from "./components";
import { useInView } from "react-intersection-observer";

interface Props {
  setShowFooter: (state: boolean) => void;
}

export const SectionFour: React.FC<Props> = ({ setShowFooter }) => {
  const products = [
    {
      image: "/softmaterial.svg",
      alt: "softmaterial",
      title: "Soft Material",
      color: "#23a6d5",
      content: "The versatile space makes it easy to keep a fresh supply of ingredients"
    },
    {
      image: "/strongdurable.svg",
      alt: "strongdurable",
      title: "Strong Durable",
      color: "#e73c7e",
      content: "The versatile space makes it easy to keep a fresh supply of ingredients"
    },
    {
      image: "/beautifulmodel.svg",
      alt: "beautifulmodel",
      title: "Beautiful Model",
      color: "#23d5ab",
      content: "The versatile space makes it easy to keep a fresh supply of ingredients"
    },
    {
      image: "/superquality.svg",
      alt: "superquality",
      title: "Super Quality",
      color: "#ee7752",
      content: "The versatile space makes it easy to keep a fresh supply of ingredients"
    }
  ];

  const { ref: titleRef, inView } = useInView({
    threshold: 0
  });
  const { ref: gridRef, inView: gridInView } = useInView({
    threshold: 0
  });

  return (
    <Container inView={inView} gridInView={gridInView}>
      <div className="main">
        <div className="canvas__wrapper">
          <div className="black__canvas">
            <Image
              src="/section-one/2.jpg"
              alt="fullimage"
              width="1700"
              height="2500"
              objectFit="cover"
              priority
            />
          </div>
        </div>
        <div className="section">
          <div className="wrapper" ref={titleRef}>
            <div className="section__name">
              <div>FEATURES</div>
            </div>

            <div className="section__heading first">
              <div>Our vision </div>
            </div>

            <div className="section__heading">
              <div>lives on there</div>
            </div>
          </div>

          <div className="section__grid">
            {products.map((item, index) => {
              return (
                <div className="grid" key={`${item.alt}${index}`} ref={gridRef}>
                  <div className="grid__image">
                    <Image src={item.image} height={55} width={55} alt={item.alt} priority />
                  </div>
                  <div className="grid__title" style={{ color: item.color }}>
                    <div className="anim">{item.title}</div>
                  </div>
                  <div className="grid__content">
                    <div>{item.content}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <BetterClothing />
      <CompanyCarousel setShowFooter={setShowFooter} />
    </Container>
  );
};
