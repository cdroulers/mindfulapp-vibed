import { test, expect } from "@playwright/test";

test.describe("Theme Switcher", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should start with auto theme", async ({ page }) => {
    // Check for the auto theme icon
    await expect(page.getByTestId("theme-icon-auto")).toBeVisible();
  });

  test("should cycle through themes when clicked", async ({ page }) => {
    const themeToggle = page.getByTitle("Toggle color scheme (Light/Dark/Auto)");

    // Click 1: auto -> light
    await themeToggle.click();
    await expect(page.getByTestId("theme-icon-light")).toBeVisible();

    // Click 2: light -> dark
    await themeToggle.click();
    await expect(page.getByTestId("theme-icon-dark")).toBeVisible();

    // Click 3: dark -> auto
    await themeToggle.click();
    await expect(page.getByTestId("theme-icon-auto")).toBeVisible();
  });

  test("should have correct theme icon based on current theme", async ({ page }) => {
    const themeToggle = page.getByTitle("Toggle color scheme (Light/Dark/Auto)");

    // Auto theme (initial state)
    await expect(page.getByTestId("theme-icon-auto")).toBeVisible();

    // Light theme
    await themeToggle.click();
    await expect(page.getByTestId("theme-icon-light")).toBeVisible();

    // Dark theme
    await themeToggle.click();
    await expect(page.getByTestId("theme-icon-dark")).toBeVisible();

    // Back to auto theme
    await themeToggle.click();
    await expect(page.getByTestId("theme-icon-auto")).toBeVisible();
  });

  test("should have the theme toggle button with correct title", async ({ page }) => {
    const themeToggle = page.getByTitle("Toggle color scheme (Light/Dark/Auto)");
    await expect(themeToggle).toBeVisible();
  });
});
