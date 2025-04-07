import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AddEntryModal } from "../AddEntryModal";
import { I18nextProvider } from "react-i18next";
import { MantineProvider } from "@mantine/core";
import testI18n from "../../i18n/testConfig";

interface AddEntryModalProps {
  opened: boolean;
  onClose: () => void;
}

describe("AddEntryModal", () => {
  const renderAddEntryModal = (props: Partial<AddEntryModalProps> = {}) => {
    return render(
      <MantineProvider>
        <I18nextProvider i18n={testI18n}>
          <AddEntryModal opened={true} onClose={() => {}} {...props} />
        </I18nextProvider>
      </MantineProvider>
    );
  };

  it("renders when opened", () => {
    const onClose = jest.fn();
    renderAddEntryModal({ onClose });

    expect(screen.getByText("Add Entry")).toBeInTheDocument();
    expect(screen.getByText("Add Entry Modal Content (to be implemented)")).toBeInTheDocument();
    expect(screen.getByText("Cancel")).toBeInTheDocument();
    expect(screen.getByText("Save")).toBeInTheDocument();
  });

  it("calls onClose when cancel button is clicked", async () => {
    const onClose = jest.fn();
    renderAddEntryModal({ onClose });

    await userEvent.click(screen.getByText("Cancel"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when save button is clicked", async () => {
    const onClose = jest.fn();
    renderAddEntryModal({ onClose });

    await userEvent.click(screen.getByText("Save"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
