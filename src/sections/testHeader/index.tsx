import { Container } from "./style"
import { useState } from "react"

export const Testheader = () => {
  const [isVisible, setIsVisible] = useState("none")

  const toggleDetails = (value: string) => {
    setIsVisible(value)
  }

  return (
    <Container>
      <div className="header">
        <div
          className="section__details"
          style={{ display: isVisible }}
          onMouseLeave={() => toggleDetails("none")}
        >
          <div>Income Protection</div>
          <div>Personal Insurance</div>
          <div>Health Insurance</div>
        </div>
        <div className="header__title">
          <p onMouseOver={() => toggleDetails("flex")}>casssava</p>
          <p>Insurance</p>
          <p>Company</p>
        </div>

        <div className="header__submit">
          <span>Sign in</span>
          <button type="submit">Get Started</button>
        </div>
      </div>
    </Container>
  )
}
