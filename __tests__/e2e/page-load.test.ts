import { test, expect } from '@playwright/test';

test('home page loads successfully', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/.*Street Ninja.*/i);
  await expect(page.locator('#logo')).toBeVisible();
});

test('map page loads successfully', async ({ page }) => {
  await page.goto('/map');
  await expect(page.getByText("Loading map...")).toBeVisible();
});


test('contact page loads successfully', async ({ page }) => {
  await page.goto('/contact');
  await expect(page.getByRole('heading', { name: "Contact", level: 2 })).toBeVisible();
});


test('try-it-out page loads successfully', async ({ page }) => {
  await page.goto('/try-it-out');
  await expect(page.getByText("Street Ninja SMS Chat")).toBeVisible();
});

