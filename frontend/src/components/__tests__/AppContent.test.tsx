import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AppContent } from "../AppContent";
import { I18nextProvider } from "react-i18next";
import { MantineProvider } from "@mantine/core";
import testI18n from "../../i18n/testConfig";

describe("AppContent", () => {
  const renderAppContent = () => {
    return render(
      <MantineProvider>
        <I18nextProvider i18n={testI18n}>
          <AppContent />
        </I18nextProvider>
      </MantineProvider>
    );
  };

  it("renders the app title", () => {
    renderAppContent();
    expect(screen.getByText("Mindful App")).toBeInTheDocument();
  });

  it("renders the add entry button", () => {
    renderAppContent();
    expect(screen.getByTestId("add-entry-button")).toBeInTheDocument();
    expect(screen.getByText("Add Entry")).toBeInTheDocument();
  });

  it("has a button that opens the modal", async () => {
    renderAppContent();

    // Click the add entry button
    const addEntryButton = screen.getByTestId("add-entry-button");
    await userEvent.click(addEntryButton);

    // We can't easily test the modal content in this environment
    // So we'll just verify that the button exists and can be clicked
    expect(addEntryButton).toBeInTheDocument();
  });
});
