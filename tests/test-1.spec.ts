import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
	await page.goto("https://skapp.com/");
	const page1Promise = page.waitForEvent("popup");
	await page.getByRole("link", { name: "Get started" }).first().click();
	const page1 = await page1Promise;
	await page1.goto("https://app.skapp.com/signup");
	await page1.getByRole("link", { name: "Sign in to your account" }).click();
	await page1.getByRole("link", { name: "commonAria.components." }).click();
});
