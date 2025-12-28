import { expect, test } from '@playwright/test';

test('has main title', async ({ page }) => {
  await page.goto('/');
  // Expect a title "to contain" a substring.
  await expect(page.getByRole('heading', { name: 'Welcome User Management!' })).toBeVisible();
});



