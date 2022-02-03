import React from "react";
import { Container } from "./style";
import { Button } from "@components/button";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { products } from "./data";

export const SectionThree = React.memo(() => {
  const { ref: titleRef, inView } = useInView({
    threshold: 0.5
  });

  const { ref: productRef, inView: productView } = useInView({
    threshold: 0.5
  });

  const { ref: cardRef, inView: cardView } = useInView({
    threshold: 0
  });

  return (
    <Container inView={inView} productView={productView} cardView={cardView}>
      <div className="main">
        <div className="section" ref={productRef}>
          <div>PRODUCT</div>
        </div>

        <div className="section__name" ref={titleRef}>
          <div>Most popular product</div>
        </div>
        <div className="cards__wrapper" ref={cardRef}>
          {products.map((item, index) => {
            return (
              <div className="card" key={`${item}${index}`}>
                <div className="card__image">
                  <Image
                    src={item.src}
                    alt={item.name}
                    width="365"
                    height="350"
                    objectFit="cover"
                    priority
                    quality={50}
                  />
                </div>
                <span className="card__item">{item.name}</span>
                <span className="card__price">{item.price}</span>
                <Button title="Buy Now" />
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
});
