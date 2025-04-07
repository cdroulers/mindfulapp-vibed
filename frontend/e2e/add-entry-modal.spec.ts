import { test, expect } from "@playwright/test";

test("add entry button opens modal", async ({ page }) => {
  await page.goto("/");

  // Check that the add entry button is visible
  const addEntryButton = page.getByTestId("add-entry-button");
  await expect(addEntryButton).toBeVisible();
  await expect(addEntryButton).toHaveText("Add Entry");

  // Click the add entry button
  await addEntryButton.click();

  // Check that the modal is opened
  const modal = page.getByRole("dialog");
  await expect(modal).toBeVisible();

  // Check modal title
  await expect(modal.getByRole("heading", { name: "Add Entry" })).toBeVisible();

  // Check modal content
  await expect(modal.getByText("Add Entry Modal Content (to be implemented)")).toBeVisible();

  // Check that the modal has cancel and save buttons
  await expect(modal.getByRole("button", { name: "Cancel" })).toBeVisible();
  await expect(modal.getByRole("button", { name: "Save" })).toBeVisible();

  // Click the cancel button
  await modal.getByRole("button", { name: "Cancel" }).click();

  // Check that the modal is closed
  await expect(modal).not.toBeVisible();
});
