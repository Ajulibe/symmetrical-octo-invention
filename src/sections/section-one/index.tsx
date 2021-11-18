import { Container } from "./style"
import { MdOutlineArrowRightAlt } from "react-icons/md"
import { IoMdCheckmark } from "react-icons/io"
import { CarouselSection } from "./components/index"
import { Button } from "@components/button"

export const SectionOne = () => {
  return (
    <Container>
      <div className="main">
        <div className="main__right-section">
          <div className="main__inverted-section">
            Style Of Culture &nbsp;&nbsp;&nbsp;&nbsp;
          </div>

          <div className="main__right-section-bold">
            <b>A style you feel comfortable in</b>
            <div className="main__right-section-light">
              <div>
                <IoMdCheckmark />
                &nbsp; Buy one get one
              </div>

              <div>
                <IoMdCheckmark /> &nbsp; Free Delivery
              </div>

              <div>
                <IoMdCheckmark /> &nbsp; Free Return
              </div>
            </div>
          </div>
        </div>

        <div className="main__left-section">
          We are a global brand of premium fashion clothing, accessories,
          footwear, and accessories products that is dedicated to offering the
          very latest in fashion styles and styles that are carefully selected
          and designed by our exclusive and talented designers.
          <Button
            title="Get Started"
            Icon={<MdOutlineArrowRightAlt className="icon" />}
          />
        </div>
      </div>
      <CarouselSection />
    </Container>
  )
}
