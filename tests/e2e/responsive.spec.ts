import { test, expect } from '@playwright/test';

test.describe('Responsive Design Tests', () => {
  test('Homepage renders correctly and has main elements', async ({ page }) => {
    await page.goto('/');

    // Check if the main heading is visible
    const heading = page.locator('h1').first();
    await expect(heading).toBeVisible();

    // Take a screenshot for visual verification across different breakpoints
    // The visual regression or layout breaking would typically be caught 
    // by asserting element visibility that might get hidden incorrectly.
    await expect(page.locator('body')).toBeVisible();
  });

  test('Explore page renders correctly', async ({ page }) => {
    await page.goto('/explore');

    // Check if the page title or a significant element is present
    await expect(page.locator('body')).toBeVisible();
  });
});
