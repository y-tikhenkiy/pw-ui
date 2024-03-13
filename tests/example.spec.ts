import { test, expect } from '@playwright/test';
import {faker} from '@faker-js/faker'

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
  let firstName: string = faker.person.firstName();
  let lastName: string = faker.person.lastName();
  let email: string = faker.internet.email();
  let userPass: string = faker.internet.password({length:8})

  console.log(`first name:\t${firstName} \nlast name:\t${lastName} \nemail:\t\t${email} \npassword:\t${userPass}`);

  await page.goto('./');
  await page.locator('#signup').click();
  await page.locator('#firstName').fill(firstName);
  await page.locator('#lastName').fill(lastName);
  await page.locator('#email').fill(email);
  await page.locator('#password').fill(userPass);
  await page.locator('#submit').click();
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('My Contacts');
  await expect(page.url()).toContain('/contactList');
});