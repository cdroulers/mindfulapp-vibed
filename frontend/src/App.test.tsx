import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the main app component", () => {
    render(<App />);
    const headingElement = screen.getByText(/Daily Journal App/i);
    expect(headingElement).toBeInTheDocument();
  });
});
