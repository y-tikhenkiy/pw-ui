import { expect, Locator } from "@playwright/test";
import { BasePage } from "./base.page";
import { faker } from "@faker-js/faker";

export class AddContact extends BasePage{
    private firstNameInput: Locator = this.page.locator("#firstName");
    private lastNameInput: Locator = this.page.locator("#lastName");
    private birtdayInput: Locator = this.page.locator("#birthdate");
    private emailInput: Locator = this.page.locator("#email");
    private phoneInput: Locator = this.page.locator("#phone");
    private street1Input: Locator = this.page.locator("#street1");
    private street2Input: Locator = this.page.locator("#street2");
    private cityInput: Locator = this.page.locator("#city");
    private stateProvinceInput: Locator = this.page.locator("#stateProvince");
    private postalCodeInput: Locator = this.page.locator("#postalCode");
    private countryInput: Locator = this.page.locator("#country");

    async expectLoaded() {
        await expect(this.firstNameInput, 'Expected Add Contact page to be opened').toBeVisible();
        await expect(this.lastNameInput, 'Expected Add Contact page to be opened').toBeVisible();
    }

    async fillFirstNameField() {
        await this.firstNameInput.fill(faker.person.firstName());
    }
    async fillLastNameField(lastName:string) {
        await this.lastNameInput.fill(faker.person.lastName());
    }

    async fillbirtdayField() {
        await this.emailInput.fill(`${faker.date.birthdate().getFullYear()}-${faker.date.birthdate().getMonth()}-${faker.date.birthdate().getDay()}`)
    }
    async fillemailField() {
        await this.emailInput.fill(faker.internet.email({provider: 'example.contats.io'}));
    }
    async fillphoneField() {

    }
    async fillstreet1Field() {

    }
    async fillstreet2Field() {

    }
    async fillcityField() {

    }
    async fillstateProvinceField() {

    }
    async fillpostalCodeField() {

    }
    async fillcountryField() {

    }


    async fillAndSubmitContactForm(){

    }
}