import { render, screen, within, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { HamburgerMenu } from "../HamburgerMenu";
import { I18nextProvider } from "react-i18next";
import { MantineProvider } from "@mantine/core";
import testI18n from "../../i18n/testConfig";

describe("HamburgerMenu", () => {
  const renderHamburgerMenu = () => {
    return render(
      <MantineProvider>
        <I18nextProvider i18n={testI18n}>
          <HamburgerMenu />
        </I18nextProvider>
      </MantineProvider>
    );
  };

  it("renders the hamburger menu button", () => {
    renderHamburgerMenu();
    expect(screen.getByLabelText("Open menu")).toBeInTheDocument();
  });

  it("opens the menu when clicked", async () => {
    const user = userEvent.setup();
    renderHamburgerMenu();

    const menuButton = screen.getByLabelText("Open menu");
    await user.click(menuButton);

    // Wait for portal content to be rendered
    await waitFor(() => {
      const portal = document.querySelector("[data-portal]");
      expect(portal).toBeInTheDocument();
    });

    // Get the portal content
    const portal = document.querySelector("[data-portal]");
    const portalContent = within(portal as HTMLElement);

    // Check if menu items are visible within the portal
    await waitFor(() => {
      expect(portalContent.getByText(testI18n.t("common.language"))).toBeInTheDocument();
      expect(
        portalContent.getByRole("menuitem", { name: testI18n.t("navigation.home") })
      ).toBeInTheDocument();
      expect(
        portalContent.getByRole("menuitem", { name: testI18n.t("navigation.profile") })
      ).toBeInTheDocument();
      expect(
        portalContent.getByRole("menuitem", { name: testI18n.t("navigation.settings") })
      ).toBeInTheDocument();
    });
  });

  it("contains the language switcher", async () => {
    const user = userEvent.setup();
    renderHamburgerMenu();

    const menuButton = screen.getByLabelText("Open menu");
    await user.click(menuButton);

    // Wait for portal content to be rendered
    await waitFor(() => {
      const portal = document.querySelector("[data-portal]");
      expect(portal).toBeInTheDocument();
    });

    // Get the portal content
    const portal = document.querySelector("[data-portal]");
    const portalContent = within(portal as HTMLElement);

    // Check if language switcher is present within the portal
    await waitFor(() => {
      const select = portalContent.getByRole("textbox", { hidden: true });
      expect(select).toBeInTheDocument();
      expect(select).toHaveValue("English");
    });
  });
});
