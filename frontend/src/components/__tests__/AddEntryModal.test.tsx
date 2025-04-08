import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AddEntryModal } from "../AddEntryModal";
import { MantineProvider } from "@mantine/core";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n/testConfig";

// Helper function to render with MantineProvider and i18next
const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <I18nextProvider i18n={i18n}>
      <MantineProvider>{ui}</MantineProvider>
    </I18nextProvider>
  );
};

describe("AddEntryModal", () => {
  const mockOnClose = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the modal with primary mood selection", () => {
    renderWithProviders(<AddEntryModal opened={true} onClose={mockOnClose} />);

    // Check if the modal title is rendered
    expect(screen.getByText("Add Entry")).toBeInTheDocument();

    // Check if the primary mood label is rendered
    expect(screen.getByText("journal.primaryMood")).toBeInTheDocument();

    // Check if all mood options are rendered
    expect(screen.getByText("journal.moods.good")).toBeInTheDocument();
    expect(screen.getByText("journal.moods.neutral")).toBeInTheDocument();
    expect(screen.getByText("journal.moods.bad")).toBeInTheDocument();

    // Check if buttons are rendered
    expect(screen.getByText("Cancel")).toBeInTheDocument();
    expect(screen.getByText("Save")).toBeInTheDocument();
  });

  it("allows selecting different primary moods", async () => {
    const user = userEvent.setup();
    renderWithProviders(<AddEntryModal opened={true} onClose={mockOnClose} />);

    // Initially, "Neutral" should be selected (default value)
    const neutralOption = screen.getByRole("radio", { name: "journal.moods.neutral" });
    expect(neutralOption).toBeChecked();

    // Select "Good" mood
    const goodOption = screen.getByRole("radio", { name: "journal.moods.good" });
    await user.click(goodOption);
    expect(goodOption).toBeChecked();
    expect(neutralOption).not.toBeChecked();

    // Select "Bad" mood
    const badOption = screen.getByRole("radio", { name: "journal.moods.bad" });
    await user.click(badOption);
    expect(badOption).toBeChecked();
    expect(goodOption).not.toBeChecked();
  });

  it("calls onClose when cancel button is clicked", async () => {
    const user = userEvent.setup();
    renderWithProviders(<AddEntryModal opened={true} onClose={mockOnClose} />);

    const cancelButton = screen.getByText("Cancel");
    await user.click(cancelButton);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
