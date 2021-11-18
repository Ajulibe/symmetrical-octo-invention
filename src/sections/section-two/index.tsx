import { Container } from "./style"
import { MdOutlineArrowRightAlt } from "react-icons/md"
import { BiChevronDown } from "react-icons/bi"
import Link from "next/link"

export const SectionTwo = () => {
  const accordionData = [
    {
      header: "We Believe In Fun",
      content:
        "We strive to create a personal experience for each one of our clients who walks into our door",
    },
    {
      header: "Far With Clothing​",
      content:
        "We strive to create a personal experience for each one of our clients who walks into our door",
    },
    {
      header: "It’s Your Choice​",
      content:
        "We strive to create a personal experience for each one of our clients who walks into our door",
    },
    {
      header: "Clothing Inside You​",
      content:
        "We strive to create a personal experience for each one of our clients who walks into our door",
    },
  ]
  return (
    <Container>
      <div className="main">
        <div className="main__heading">
          Need a little protection? Have a look at the fabulous zumba designs in
          one case
        </div>

        <div className="main__heading-link">
          <span>
            <Link href="/">
              <a>
                Learn more <MdOutlineArrowRightAlt />
              </a>
            </Link>
          </span>
        </div>

        <div className="main__accordion-wrapper">
          <div className="main__accordion">
            <span>BENEFIT</span>
            <div className="main__accordion-heading">
              Every clothing Has a Story
            </div>

            {accordionData.map((item, index) => {
              return (
                <div className="main__accordion-item" key={`${index}${item}`}>
                  <span>
                    {item.header}
                    <BiChevronDown className="dropdown-icon" />
                  </span>
                  <input className="focus-tracker" readOnly />
                  <div className="main__accordion-content">
                    <div className="main__accordion-content-anim">
                      <h4>{item.content}</h4>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="image__wrapper">
            <div></div>
          </div>
        </div>
      </div>
    </Container>
  )
}
