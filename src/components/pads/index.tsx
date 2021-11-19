import { Container } from "./style"
import React from "react"
import dynamic from "next/dynamic"

const PadGroup = dynamic(() => import("./components"))

const Pads: React.FC = () => {
  return (
    <Container>
      {/* {[...new Array(1120)].map((index) => (
        <div key={index} className="grid"></div>
      ))} */}
      <PadGroup />
      <PadGroup />
      <PadGroup />
      <PadGroup />
      <PadGroup />
      <PadGroup />
    </Container>
  )
}

export default Pads
