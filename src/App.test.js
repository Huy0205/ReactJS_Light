import { render } from "@testing-library/react";
import App from "./App";

test("renders App component", () => {
  const { getByText, getByAltText } = render(<App />);
  
  const image = getByAltText("Light");
  expect(image).toBeInTheDocument();

  const btn = getByText("Off");
  expect(btn).toBeInTheDocument();
});
