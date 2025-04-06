import { test, expect } from "@playwright/test";

test("homepage has correct title", async ({ page }) => {
  await page.goto("/");

  // Expect the main heading to be visible.
  await expect(page.getByRole("heading", { name: "Mindful App" })).toBeVisible();
});

test("language switcher changes language", async ({ page }) => {
  await page.goto("/");

  // Open the hamburger menu
  await page.getByLabel("Open menu").click();

  // Click the language switcher input to open the dropdown
  await page.getByRole("textbox", { includeHidden: true }).click();

  // Select the French option from the dropdown
  await page.getByRole("option", { name: "Français" }).click();

  // Check if the title has changed to French
  await expect(page.getByRole("heading", { name: "Application Mindfulness" })).toBeVisible();
});
