import { render } from "@testing-library/react";
import { Button } from "./index";
import { MdOutlineArrowRightAlt } from "@src/assets/icon";

describe("@Components/Button", () => {
  test("renders the button text", () => {
    const buttonText = "click here";
    const { getByText } = render(<Button title={buttonText} />);
    expect(getByText(buttonText)).toBeDefined();
  });

  test("renders with icons", () => {
    const { getByText } = render(
      <Button title="Get Started" Icon={<MdOutlineArrowRightAlt className="icon" />} />
    );
    expect(getByText("Get Started")).toBeTruthy();
  });
});
