import { render, screen, fireEvent } from "@testing-library/react";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n/config";

describe("LanguageSwitcher", () => {
  it("renders language options", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <LanguageSwitcher />
      </I18nextProvider>
    );

    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("changes language when a new option is selected", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <LanguageSwitcher />
      </I18nextProvider>
    );

    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "fr" } });

    expect(i18n.language).toBe("fr");
  });
});
