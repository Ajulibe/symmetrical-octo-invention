import { Container, ContainerCompanyCarousel } from "./style"
import React from "react"
import { MdOutlineArrowRightAlt } from "react-icons/md"
import { Button } from "@components/button"
import Image from "next/image"

export const BetterClothing = () => {
  return (
    <Container>
      <div className="main">
        <div className="main__heading">Things go better with clothing!</div>
        <Button
          title="Get Started"
          Icon={<MdOutlineArrowRightAlt className="icon" />}
        />
      </div>

      {/* <div className="company__carousel">
        <Image src="/firstIpsum.svg" height={55} width={55} alt="firstIpsum" />
      </div> */}
    </Container>
  )
}

export const CompanyCarousel = () => {
  return (
    <ContainerCompanyCarousel>
      <div className="carousel">
        <Image
          src="/carousel/firstIpsum.svg"
          height={36}
          width={157}
          alt="firstIpsum"
        />
        <Image
          src="/carousel/secondIpsum.svg"
          height={29.36}
          width={146.3}
          alt="firstIpsum"
        />
        <Image
          src="/carousel/thirdIpsum.svg"
          height={40.93}
          width={157.01}
          alt="firstIpsum"
        />
        <Image
          src="/carousel/fourthIpsum.svg"
          height={36.3}
          width={161.21}
          alt="firstIpsum"
        />
        <Image
          src="/carousel/fifthIpsum.svg"
          height={33.73}
          width={147.68}
          alt="firstIpsum"
        />
      </div>
    </ContainerCompanyCarousel>
  )
}
