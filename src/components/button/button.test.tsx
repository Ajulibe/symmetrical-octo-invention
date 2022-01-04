import { render, screen } from "@testing-library/react";
import { Button } from "./index";
// import userEvent from "@testing-library/user-event";

// describe("Button", () => {
it("Button: Testing the button", () => {
  const buttonText = "click here";
  const { getByText } = render(<Button title={buttonText} />);
  expect(getByText(buttonText)).toBeDefined();
});

//   it("Is onClick called", () => {
//     const buttonText = "click here";
//     const testOnClick = jest.fn();

//     const { getByText } = render(<Button onClick={testOnClick}>{buttonText}</Button>);

//     userEvent.click(getByText(buttonText));

//     expect(testOnClick).toBeCalledTimes(1);
//   });
