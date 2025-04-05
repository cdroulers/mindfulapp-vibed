import { test, expect } from "@playwright/test";

test("homepage has correct title", async ({ page }) => {
  await page.goto("/");

  // Expect the main heading to be visible.
  await expect(page.locator("div").filter({ hasText: "Daily Journal App" }).first()).toBeVisible();
});
