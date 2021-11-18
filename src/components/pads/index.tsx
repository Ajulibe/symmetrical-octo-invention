import { Container } from "./style"

export const Pads = () => {
  return (
    <Container>
      {[...new Array(1120)].map((index) => (
        <div key={index} className="grid"></div>
      ))}
    </Container>
  )
}
