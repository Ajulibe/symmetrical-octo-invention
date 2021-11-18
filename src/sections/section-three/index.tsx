import { Container } from "./style"
import { Button } from "@components/button"

export const SectionThree = () => {
  const products = [
    {
      image: "",
      name: "Flower Tshirt",
      price: "$40.0",
    },
    {
      image: "",
      name: "Bodysuit Lace",
      price: "$40.0",
    },
    {
      image: "",
      name: "City Baggies",
      price: "$40.0",
    },
  ]
  return (
    <Container>
      <div className="main">
        <span className="section">PRODUCT</span>
        <span className="section__name">Most popular product</span>
        <div className="cards__wrapper">
          {products.map((item, index) => {
            return (
              <div className="card" key={`${item}${index}`}>
                <div className="card__image"></div>
                <span className="card__item">{item.name}</span>
                <span className="card__price">{item.price}</span>
                <Button title="Buy Now" />
              </div>
            )
          })}
        </div>
      </div>
    </Container>
  )
}
