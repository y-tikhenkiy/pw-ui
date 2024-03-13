import { test, expect } from '@playwright/test';

test('has title "Contact List App"', async ({ page }) => {
  await page.goto('./');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Contact List App');
});

test('has title "Add User"', async ({ page }) => {
  await page.goto('./');
  await page.locator('#signup').click();
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Add User');
});

test('should be able to "Add User"', async ({ page }) => {
  await page.goto('./');
  await page.locator('#signup').click();
  await page.locator('#firstName').fill("test");
  await page.locator('#lastName').fill("test");
  await page.locator('#email').fill("test031324@test.com");
  await page.locator('#password').fill("1234567");
  await page.locator('#submit').click();
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('My Contacts');
  await expect(page.url()).toContain('/contactList');
});