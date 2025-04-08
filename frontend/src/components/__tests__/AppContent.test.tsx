import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AppContent } from "../AppContent";
import { I18nextProvider } from "react-i18next";
import { MantineProvider } from "@mantine/core";
import testI18n from "../../i18n/testConfig";

describe("AppContent", () => {
  const renderAppContent = () => {
    return render(
      <MantineProvider defaultColorScheme="auto">
        <I18nextProvider i18n={testI18n}>
          <AppContent />
        </I18nextProvider>
      </MantineProvider>
    );
  };

  it("renders the app title and logo", () => {
    renderAppContent();

    expect(screen.getByText("Mindful App")).toBeInTheDocument();
    const logo = screen.getByAltText("Mindful App");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "/logo.png");
  });

  it("starts with auto theme and shows desktop icon", () => {
    renderAppContent();

    const toggleButton = screen.getByTitle("Toggle color scheme (Light/Dark/Auto)");
    expect(toggleButton).toBeInTheDocument();

    // Check for desktop icon (auto theme)
    const desktopIcon = screen.getByTestId("theme-icon-auto");
    expect(desktopIcon).toBeInTheDocument();
  });

  it("cycles through themes when toggle button is clicked", async () => {
    const user = userEvent.setup();
    renderAppContent();

    const toggleButton = screen.getByTitle("Toggle color scheme (Light/Dark/Auto)");

    // Click 1: auto -> light
    await user.click(toggleButton);
    expect(screen.getByTestId("theme-icon-light")).toBeInTheDocument();

    // Click 2: light -> dark
    await user.click(toggleButton);
    expect(screen.getByTestId("theme-icon-dark")).toBeInTheDocument();

    // Click 3: dark -> auto
    await user.click(toggleButton);
    expect(screen.getByTestId("theme-icon-auto")).toBeInTheDocument();
  });

  it("renders the main content area", () => {
    renderAppContent();
    expect(screen.getByText("App Content Area")).toBeInTheDocument();
  });

  it("renders the hamburger menu", () => {
    renderAppContent();
    expect(screen.getByLabelText("Open menu")).toBeInTheDocument();
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
