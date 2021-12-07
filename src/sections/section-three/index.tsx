import { Container } from "./style";
import { Button } from "@components/button";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export const SectionThree = () => {
  const products = [
    {
      src: "https://res.cloudinary.com/ajulibe/image/upload/v1630596893/ROMI/alesia-kazantceva-dhD_FiNkuzw-unsplash_d0gswj.jpg",
      name: "Flower Tshirt",
      price: "$40.0"
    },
    {
      src: "https://res.cloudinary.com/ajulibe/image/upload/v1630596893/ROMI/alesia-kazantceva-dhD_FiNkuzw-unsplash_d0gswj.jpg",
      name: "Bodysuit Lace",
      price: "$40.0"
    },
    {
      src: "https://res.cloudinary.com/ajulibe/image/upload/v1630596893/ROMI/alesia-kazantceva-dhD_FiNkuzw-unsplash_d0gswj.jpg",
      name: "City Baggies",
      price: "$40.0"
    }
  ];
  const { ref: titleRef, inView } = useInView({
    threshold: 0.5
  });

  const { ref: productRef, inView: productView } = useInView({
    threshold: 0.5
  });

  return (
    <Container inView={inView} productView={productView}>
      <div className="main">
        <div className="section" ref={productRef}>
          <div>PRODUCT</div>
        </div>

        <div className="section__name" ref={titleRef}>
          <div>Most popular product</div>
        </div>
        <div className="cards__wrapper">
          {products.map((item, index) => {
            return (
              <div className="card" key={`${item}${index}`}>
                <div className="card__image">
                  <Image
                    src={item.src}
                    alt={item.name}
                    width="466"
                    height="366"
                    objectFit="cover"
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
};
