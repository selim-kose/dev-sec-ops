import { expect, test } from '@playwright/test';

test('has main title', async ({ page }) => {
  await page.goto('/');
  // Expect a title "to contain" a substring.
  await expect(page.getByRole('heading', { name: 'Welcome to User Management!' })).toBeVisible();
});

test('navigate to add user page', async ({ page }) => {
  await page.goto('/');
  await page.getByTestId('add-user-link').click();
  await expect(page.getByRole('heading', { name: 'Add new user' })).toBeVisible();
});

test('Navigate to remove user page', async ({ page }) => {
  await page.goto('/');
  await page.getByTestId('remove-user-link').click();
  await expect(page.getByRole('heading', { name: 'Delete user' })).toBeVisible();
});

test('Navigate to update user page', async ({ page }) => {
  await page.goto('/');
  await page.getByTestId('update-user-link').click();
  await expect(page.getByRole('heading', { name: 'Update user' })).toBeVisible();
});

test('Check if users are listed', async ({ page }) => {
  await page.goto('/'); 
  const userRows = page.getByTestId('user');
  await expect(userRows).not.toHaveCount(0);
  await expect(userRows.first()).toBeVisible();
  
});