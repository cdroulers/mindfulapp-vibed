import { render, screen } from "@testing-library/react";
import { App } from "../../App";
import { I18nextProvider } from "react-i18next";
import testI18n from "../../i18n/testConfig";

describe("App", () => {
  it("renders the main app component title", () => {
    render(
      <I18nextProvider i18n={testI18n}>
        <App />
      </I18nextProvider>
    );
    const headingElement = screen.getByRole("heading", {
      name: /mindful app/i,
    });
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent(/Mindful App/i);
  });
});
