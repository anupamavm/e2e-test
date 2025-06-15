import { test, expect } from "@playwright/test";

// Existing tests
test("has title", async ({ page }) => {
	await page.goto("https://playwright.dev/");
	await expect(page).toHaveTitle(/Playwright/);
});

test("get started link", async ({ page }) => {
	await page.goto("https://playwright.dev/");
	await page.getByRole("link", { name: "Get started" }).click();
	await expect(
		page.getByRole("heading", { name: "Installation" })
	).toBeVisible();
});

// New tests
test("navigation bar contains Docs link", async ({ page }) => {
	await page.goto("https://playwright.dev/");
	await expect(page.getByRole("link", { name: "Docs" })).toBeVisible();
});

// To run tests in parallel, Playwright Test runs tests in parallel by default at the file level.
// To enable parallelism within a file, use test.describe.parallel:
test.describe.parallel("Playwright.dev UI tests", () => {
	test("home page loads", async ({ page }) => {
		await page.goto("https://playwright.dev/");
		await expect(page).toHaveTitle(/Playwright/);
	});

	test("community link is visible", async ({ page }) => {
		await page.goto("https://playwright.dev/");
		await expect(page.getByRole("link", { name: "Community" })).toBeVisible();
	});
});
