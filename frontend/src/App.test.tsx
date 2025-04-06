import { render, screen } from "@testing-library/react";
import { App } from "./App";

describe("App", () => {
  it("renders the main app component title", () => {
    render(<App />);
    const headingElement = screen.getByRole("heading", {
      name: /mindful app/i,
    });
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent(/Mindful App/i);
  });
});
