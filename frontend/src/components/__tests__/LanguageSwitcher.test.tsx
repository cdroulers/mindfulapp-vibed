import { render, screen, fireEvent } from "@testing-library/react";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { I18nextProvider } from "react-i18next";
import { MantineProvider } from "@mantine/core";
import testI18n from "../../i18n/testConfig";

describe("LanguageSwitcher", () => {
  it("renders language options", () => {
    render(
      <MantineProvider>
        <I18nextProvider i18n={testI18n}>
          <LanguageSwitcher />
        </I18nextProvider>
      </MantineProvider>
    );

    // The Select component renders as a textbox with aria-haspopup="listbox"
    const select = screen.getByRole("textbox", { name: "" });
    expect(select).toBeInTheDocument();
    expect(select).toHaveValue("English");
  });

  it("changes language when a new option is selected", () => {
    render(
      <MantineProvider>
        <I18nextProvider i18n={testI18n}>
          <LanguageSwitcher />
        </I18nextProvider>
      </MantineProvider>
    );

    // Click the select to open it
    const select = screen.getByRole("textbox", { name: "" });
    fireEvent.click(select);

    // Find and click the French option
    const frenchOption = screen.getByRole("option", { name: "Français" });
    fireEvent.click(frenchOption);

    expect(testI18n.language).toBe("fr");
  });
});
