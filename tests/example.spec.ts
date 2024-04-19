import { test, expect } from '@playwright/test';
import {faker} from '@faker-js/faker'
import { SignIn } from '../project/pages/signIn.page'
import { Application } from '../project';


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

test.fixme('should be able to "Add User"', async ({ page }) => {
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

test('should add new user via POM', async ({page}) =>{
  const signInPage = new SignIn(page);
  let firstName: string = faker.person.firstName();
  let lastName: string = faker.person.lastName();
  let email: string = faker.internet.email();
  let userPass: string = faker.internet.password({length:8})

  await signInPage.navigateToLogIn('./');
  const signUpPage = await signInPage.clickSignUpButton();
  await signUpPage.addUser(firstName, lastName, email, userPass);

  await expect(page).toHaveTitle('My Contacts');
  await expect(page.url()).toContain('/contactList');
})

test('should sign in to existing profile', async ({page}) => {
  const signInPage = new SignIn(page);
  const firstContactLocator = await page.locator(`//table[@id='myTable']/tr[1]/td[2]`)

  await signInPage.navigateToLogIn('/');
  await signInPage.login();

  await expect(firstContactLocator).toHaveText(/Montana Rodriguez/);
  await expect(page.url()).toContain("/contactList");

})

test('should open contact details from the contact list', async({page}) => {
  const signInPage = new SignIn(page);
  const fullNameLocator = page.locator(`//table[@id='myTable']/tr[1]/td[2]`);
  const contactFirstName = await page.locator('#firstName');
  const contactLastName = await page.locator('#lastName');
  
  await signInPage.navigateToLogIn('/');
  await signInPage.login();
  const fullNameArr = (await fullNameLocator.innerText()).split(' ');
  await fullNameLocator.click();

  await expect(contactFirstName).toHaveText(fullNameArr[0]);
  await expect(contactLastName).toHaveText(fullNameArr[1]);
})

test.only('should add a new contact', async({page}) => {
  const app = new Application(page);
  const contactFirstName = await page.locator('#firstName');
  const contactLastName = await page.locator('#lastName');
  const fullNameLocator = page.locator(`//table[@id='myTable']/tr[last()]/td[2]`);

  let firstName: string = faker.person.firstName();
  let lastName: string = faker.person.lastName();
  let email: string = faker.internet.email();
  let userPass: string = faker.internet.password({length:8})

  await app.signIn.navigateToLogIn('/');
  // await app.signIn.login();
  await app.signIn.clickSignUpButton();
  await app.signUp.addUser(firstName, lastName, email, userPass);
  await app.contactList.addNewContact();
  await app.addContact.fillAndSubmitContactForm();
  await app.contactList.clickOnLastAddedContactName();

  await expect(await fullNameLocator.innerText()).toContain(contactFirstName.innerText());

})